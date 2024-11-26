import links from "Constants/imageLinks";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col items-center gap-2">
      {links.map((link, index) => (
        <Link href={`/photo/${index}`} key={index}>
          <img
            src={link}
            alt="this is a image"
            className="aspect-square w-96 object-cover"
          />
        </Link>
      ))}
    </div>
  );
}
