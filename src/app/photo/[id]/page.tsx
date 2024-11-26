import links from "Constants/imageLinks";

export default async function page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const { id } = await params;

  const imgLink: string = links[id];

  return (
    <div>
      <h1>{id}</h1>
      <img src={imgLink} alt="here is a image" />
    </div>
  );
}
