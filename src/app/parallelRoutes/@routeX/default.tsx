import Link from "next/link";

export default function Default() {
  return (
    <h1 className="text-white">
      this is default
      <Link href={"parallelRoutes/settings"}>go to this apge</Link>
    </h1>
  );
}
