"use client";

import { useMemo, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

function AndroidMark() {
  return (
    <span aria-hidden="true" className="relative h-4 w-4">
      <span className="absolute left-[3px] top-0 h-[1px] w-[5px] origin-left rotate-[-35deg] rounded-full bg-current" />
      <span className="absolute right-[3px] top-0 h-[1px] w-[5px] origin-right rotate-[35deg] rounded-full bg-current" />
      <span className="absolute left-[2px] top-[3px] h-[10px] w-[12px] rounded-t-[7px] rounded-b-[2px] bg-current" />
      <span className="absolute left-[5px] top-[6px] h-[1.5px] w-[1.5px] rounded-full bg-ink" />
      <span className="absolute right-[5px] top-[6px] h-[1.5px] w-[1.5px] rounded-full bg-ink" />
    </span>
  );
}

export function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const formStartedAt = useMemo(() => Date.now(), []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    const destinationInterest = String(
      formData.get("destinationInterest") ?? ""
    ).trim();
    const website = String(formData.get("website") ?? "");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setState("loading");
    setMessage("");

    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        destinationInterest,
        website,
        formStartedAt
      })
    });

    const data = (await response.json().catch(() => ({}))) as {
      error?: string;
    };

    if (!response.ok) {
      setState("error");
      setMessage(data.error ?? "Something went wrong. Please try again.");
      return;
    }

    setState("success");
    setMessage("You are on the list. Private beta notes will arrive soon.");
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full rounded-[18px] border border-white/10 bg-white/[0.06] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur ${
        compact ? "max-w-2xl" : "max-w-3xl"
      }`}
    >
      <div className="grid gap-2 sm:grid-cols-[1fr_0.72fr_auto]">
        <label className="sr-only" htmlFor={compact ? "final-email" : "email"}>
          Email address
        </label>
        <input
          id={compact ? "final-email" : "email"}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          className="h-14 min-w-0 rounded-[14px] border border-white/10 bg-black/35 px-4 text-[15px] text-porcelain outline-none transition placeholder:text-white/42 focus:border-white/35"
        />
        <label
          className="sr-only"
          htmlFor={compact ? "final-destination" : "destination"}
        >
          Destination interest
        </label>
        <input
          id={compact ? "final-destination" : "destination"}
          name="destinationInterest"
          type="text"
          placeholder="Kyoto, Lisbon..."
          className="h-14 min-w-0 rounded-[14px] border border-white/10 bg-black/35 px-4 text-[15px] text-porcelain outline-none transition placeholder:text-white/42 focus:border-white/35"
        />
        <input
          aria-hidden="true"
          autoComplete="off"
          className="hidden"
          name="website"
          tabIndex={-1}
          type="text"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex h-14 items-center justify-center gap-2 rounded-[14px] bg-porcelain px-6 text-[14px] font-semibold text-ink transition hover:bg-[#d9c7a9] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "loading" ? (
            "Joining..."
          ) : (
            <>
              <AndroidMark />
              Android Waitlist
            </>
          )}
        </button>
      </div>
      <p
        className={`px-2 pt-3 text-sm ${
          state === "error" ? "text-[#d99b7a]" : "text-white/58"
        }`}
        aria-live="polite"
      >
        {message || "Launching private beta soon."}
      </p>
    </form>
  );
}
