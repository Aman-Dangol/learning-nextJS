import Link from "next/link";

export default function page() {
  return (
    <div>
      <a href="/homepage/temporary/">temporary redirect</a> <br />
      <Link href={"/dashboard"}>dashboard go to</Link>
    </div>
  );
}
