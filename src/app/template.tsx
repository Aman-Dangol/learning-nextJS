"use client";

import { useEffect } from "react";

export default function template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("new instance");
  }, []);
  return <div>{children}</div>;
}
