import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bazooka Fitness | Stronger Together",
  description: "Bazooka Fitness — strength, performance and community in Jodhpur.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth bg-bazooka-black">
      <body className="m-0 bg-bazooka-black text-bazooka-text selection:bg-bazooka-lime selection:text-bazooka-black">{children}</body>
    </html>
  );
}
