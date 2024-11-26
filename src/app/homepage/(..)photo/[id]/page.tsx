import links from "Constants/imageLinks";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const { id } = await params;
  const link = links[id];

  return (
    <Link href="/homepage">
      <div className="absolute h-full w-full flex justify-center items-center bg-black/50">
        <img src={link} alt="" className="w-[60vh]" />
      </div>
    </Link>
  );
}
