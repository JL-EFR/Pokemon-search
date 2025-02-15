import { getClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import { Search } from "@/components/search";
import { Filter } from "@/components/filter";
import { Suspense } from "react";

export default async function Home() {
  const query = gql`
    query pokemons($first: Int!) {
      pokemons(first: $first) {
        id
        number
        name
        image
        types
      }
    }
  `;
  const variable = {
    first: 151,
  };
  const { data, loading, error } = await getClient.query({
    query: query,
    variables: variable,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;
  return (
    <div>
      <div className="w-full my-2 font-bold text-3xl flex flex-wrap justify-between">
        <span>Pokemon-search</span>
        <Suspense>
          <Search />
        </Suspense>
      </div>
      <div className="autogrid200px">
        <Suspense>
          <Filter>{data["pokemons"]}</Filter>
        </Suspense>
      </div>
    </div>
  );
}
