import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOEWE FOUNDATION CRAFT PRIZE",
  description: "LOEWE FOUNDATION CRAFT PRIZE Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-helvetica">{children}</body>
    </html>
  );
}
