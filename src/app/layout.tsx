"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className="">
        {children} {/* this renders page.tsx */}
      </body>
    </html>
  );
}
