import { getClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import { Card } from "./card";
export const Evolution = async (children: { children: string }) => {
  const query = gql`
    query pokemon($name: String) {
      pokemon(name: $name) {
        id
        name
        evolutions {
          id
          number
          name
          types
          image
        }
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
  if (data["pokemon"]["evolutions"]) {
    return (
      <div className="w-full border-2 rounded-md p-2">
        <div className="font-bold">Evolutions</div>
        <div className="flex justify-between my-2">
          {data["pokemon"]["evolutions"].map(
            (pokemon: {
              name: string;
              number: string;
              image: string;
              types: [string];
            }) => {
              return (
                <Card key={`evo${pokemon.name}${children.children}`}>
                  {pokemon}
                </Card>
              );
            }
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="w-full border-2 rounded-md p-2">
      <div className="font-bold">This pokemon can not evolve.</div>
    </div>
  );
};
