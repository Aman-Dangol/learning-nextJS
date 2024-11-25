import Navbar from "@/components/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "next js practice",
};

export default function Home() {
  return (
    <div className="">
      this is from page
      <Navbar />
    </div>
  );
}
