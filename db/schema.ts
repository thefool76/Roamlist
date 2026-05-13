import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const waitlist = pgTable("waitlist", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  destinationInterest: text("destination_interest"),
  createdAt: timestamp("created_at", { withTimezone: false }).defaultNow()
});
