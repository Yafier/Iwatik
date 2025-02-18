import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "IWATIK Balikpapan",
  description: "Ingat Batik, Ingat Iwatik!",
  icons: {
    icon: [
      {
        url: "/iwatikicon.png",
        href: "/iwatikicon.png",
      }
    ],
    apple: {
      url: "/iwatikicon.png",
      href: "/iwatikicon.png",
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/iwatikicon.png" />
        <link rel="apple-touch-icon" href="/iwatikicon.png" />
      </head>
      <body className="antialiased font-helvetica">{children}</body>
    </html>
  );
}
