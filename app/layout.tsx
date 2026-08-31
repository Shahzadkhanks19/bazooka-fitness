import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bazooka Fitness | Stronger Together",
  description: "Bazooka Fitness — strength, performance and community in Jodhpur.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
