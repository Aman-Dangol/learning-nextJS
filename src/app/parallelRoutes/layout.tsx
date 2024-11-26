import { ReactNode } from "react";

export default function layout({
  children,
  routeX,
  routeY,
}: {
  children: ReactNode;
  routeX: ReactNode;
  routeY: ReactNode;
}) {
  return (
    <main className="">
      <div>{children}</div>;
      <div className="flex h-screen bg-black [&>*]:flex-1 ">
        {routeX}
        {routeY}
      </div>
    </main>
  );
}
