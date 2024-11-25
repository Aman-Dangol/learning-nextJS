"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  const pathname = usePathname()
  return (
    <button className="bg-red-400 " onClick={() => router.push("/dashboard")}>
      click me!!!
    </button>
  );
}
