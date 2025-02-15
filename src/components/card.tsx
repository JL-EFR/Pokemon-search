import styles from "./card.module.css";
import Image from "next/image";
import { Type } from "./types";
import Link from "next/link";

export const Card = (children: {
  children: { name: string; number: string; image: string; types: [string] };
}) => {
  return (
    <Link href={`/detail/${children.children.name}`}>
      <div className="cursor-pointer p-2 border-2 border-gray-300 rounded-md hover:border-gray-800 font-bold">
        <div>#{children.children.number}</div>
        <div className={styles.imageCard}>
          <Image
            className="object-contain"
            src={children.children.image}
            alt={children.children.name}
            fill={true}
            sizes="(max-width: 150px)"
          />
        </div>
        <div>
          {children.children.name}
          <br />
          <div className="flex flex-wrap">
            {children["children"]["types"].map((str: string) => {
              return <Type key={`${str}${children.children.name}`}>{str}</Type>;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};
