import React, { ReactNode } from "react";

export default function layout({
  children,
  routex,
  routey,
}: {
  children: React.ReactNode;
  routex?: ReactNode;
  routey?: ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="grid grid-cols-2">
        {routex}
        {routey}
      </div>
    </div>
  );
}
