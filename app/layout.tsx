import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "RoamList - Travel plans built from real traveler tips",
  description:
    "Join the waitlist for RoamList, a travel guide app for real traveler-backed, map-ready itineraries."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
