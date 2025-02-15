"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const Search = () => {
  const router = useRouter();

  const [text, setText] = useState("");
  useEffect(() => {
    if (text.length === 0) {
      router.replace("/");
    } else {
      router.push(`?search=${text}`);
    }
  }, [text, router]);
  return (
    <input
      type="text"
      value={text}
      placeholder="Enter your pokemon name"
      className="border-2 py-3 pl-2 pr-3"
      onChange={(event) => {
        setText(event.target.value);
      }}
    />
  );
};
