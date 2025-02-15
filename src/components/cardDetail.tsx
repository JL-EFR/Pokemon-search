import { getClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import Image from "next/image";
import styles from "./cardDetail.module.css";
import { Type } from "./types";

export const CardDetail = async (children: { children: string }) => {
  const query = gql`
    query pokemon($name: String) {
      pokemon(name: $name) {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
      }
    }
  `;
  const variable = {
    name: children.children,
  };
  const { data, loading, error } = await getClient.query({
    query: query,
    variables: variable,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;
  return (
    <div className="my-4 p-2 border-2 rounded-md">
      <div>
        <span className="font-bold text-xl">#{data.pokemon.number}</span>
      </div>
      <div className={styles.imageCardDetail}>
        <Image
          className="object-contain"
          src={data.pokemon.image}
          alt={data.pokemon.name}
          fill={true}
          sizes="(max-width: 500px)"
        />
      </div>
      <div>
        <span className="font-bold text-2xl">{data.pokemon.name}</span>

        <div className="flex flex-wrap">
          {data["pokemon"]["types"].map((str: string) => {
            return <Type key={`${children.children}type${str}`}>{str}</Type>;
          })}
        </div>
        <span>{`Weight: ${data.pokemon.weight.minimum} - ${data.pokemon.weight.maximum}`}</span>
        <br />
        <span>{`Height: ${data.pokemon.height.minimum} - ${data.pokemon.height.maximum}`}</span>
        <br />
        <div className="flex flex-wrap  items-center">
          <span>Resistant: </span>
          {data["pokemon"]["resistant"].map((str: string) => {
            return (
              <Type key={`${children.children}Resistant${str}`}>{str}</Type>
            );
          })}
        </div>
        <div className="flex flex-wrap  items-center">
          <span>Weaknesses: </span>
          {data["pokemon"]["weaknesses"].map((str: string) => {
            return (
              <Type key={`${children.children}Weaknesses${str}`}>{str}</Type>
            );
          })}
        </div>
      </div>
    </div>
  );
};
