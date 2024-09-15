import React from "react";
import Link from "next/link";

export default function Button({ text, link }: { text: string; link: string }) {
  return (
    <Link href={link} className="btn" target="_blank">
      {text}
    </Link>
  );
}
