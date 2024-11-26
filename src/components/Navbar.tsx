"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <ul>
      <Link href={"/"} className={` ${pathname == "/" ? "bg-green-400" : ""}`}>
        default
      </Link>
      <li>
        <Link
          href={"/dashboard"}
          className={` ${pathname == "/dashboard" ? "bg-green-400" : ""}`}
        >
          dashboard
        </Link>
      </li>
      <li>
        <Link
          href={"/homepage"}
          className={` ${pathname == "/homepage" ? "bg-green-400" : ""}`}
        >
          homepage
        </Link>
      </li>
      <li>
        <Link
          href={"/parallelRoutes"}
          className={` ${pathname == "/homepage" ? "bg-green-400" : ""}`}
        >
          parallelRoutes
        </Link>
      </li>
    </ul>
  );
}
