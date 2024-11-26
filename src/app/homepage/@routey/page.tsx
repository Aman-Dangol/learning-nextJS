import Link from "next/link";

export default function page() {
  return (
    <main className="bg-blue-500 h-screen">
      this is route Y
      
      <Link href={"/dashboard"}>dashboard</Link>
    </main>
  );
}
