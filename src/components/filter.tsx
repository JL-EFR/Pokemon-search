"use client";

import { useSearchParams } from "next/navigation";
import { Card } from "@/components/card";

export const Filter = (children: {
  children: [{ name: string; number: string; image: string; types: [string] }];
}) => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  return children["children"]
    .filter(
      (pok: {
        name: string;
        number: string;
        image: string;
        types: [string];
      }) => {
        if (search) {
          return pok.name.toLocaleLowerCase().includes(search);
        } else {
          return true;
        }
      }
    )
    .map(
      (pokemon: {
        name: string;
        number: string;
        image: string;
        types: [string];
      }) => {
        return <Card key={pokemon.name}>{pokemon}</Card>;
      }
    );
};
