import type { ReactNode } from "react";

export default function Page({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto w-fit">
      <h1>{heading}</h1>
      {children}
    </article>
  );
}
