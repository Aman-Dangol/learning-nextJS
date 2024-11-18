"use client";

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  return (
    <button className="bg-red-400" onClick={() => router.push("/dashboard")}>
      click me!!!
    </button>
  );
}
