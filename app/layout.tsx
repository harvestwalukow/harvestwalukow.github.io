import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../components/InterVariable.ttf",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HARVEST WALUKOW",
  description: "Personal portfolio of Harvest Walukow.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
