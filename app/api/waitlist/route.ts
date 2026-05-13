import { NextResponse } from "next/server";
import { z } from "zod";

import { waitlist } from "@/db/schema";
import { getDb } from "@/lib/db";

const waitlistSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address."),
  destinationInterest: z
    .string()
    .trim()
    .max(120, "Destination must be shorter than 120 characters.")
    .optional()
    .or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")),
  formStartedAt: z.number().int().positive().optional()
});

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_ATTEMPTS = 5;
const MIN_SUBMIT_TIME_MS = 1800;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function isUniqueViolation(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "23505"
  );
}

function getDatabaseErrorCode(error: unknown) {
  if (typeof error !== "object" || error === null || !("code" in error)) {
    return null;
  }

  return String(error.code);
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  return forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || record.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS
    });
    return false;
  }

  record.count += 1;
  return record.count > RATE_LIMIT_MAX_ATTEMPTS;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = waitlistSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Please check your details." },
      { status: 400 }
    );
  }

  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  if (
    !parsed.data.formStartedAt ||
    Date.now() - parsed.data.formStartedAt < MIN_SUBMIT_TIME_MS
  ) {
    return NextResponse.json(
      { error: "Please wait a moment before submitting." },
      { status: 400 }
    );
  }

  const email = parsed.data.email.toLowerCase();
  const destinationInterest = parsed.data.destinationInterest || null;

  try {
    const db = getDb();

    await db.insert(waitlist).values({
      email,
      destinationInterest
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (isUniqueViolation(error)) {
      return NextResponse.json(
        { error: "You are already on the RoamList waitlist." },
        { status: 409 }
      );
    }

    if (error instanceof Error && error.message === "DATABASE_URL is not set") {
      return NextResponse.json(
        {
          error:
            "DATABASE_URL is missing. Add your Neon connection string to .env.local and restart the dev server."
        },
        { status: 500 }
      );
    }

    const code = getDatabaseErrorCode(error);

    if (code === "42P01") {
      return NextResponse.json(
        {
          error:
            "The waitlist table does not exist yet. Run db/setup.sql in your Neon database."
        },
        { status: 500 }
      );
    }

    console.error("Waitlist signup failed", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again in a moment." },
      { status: 500 }
    );
  }
}
