import { getClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import { Type } from "./types";
export const Attack = async (children: { children: string }) => {
  const query = gql`
    query pokemon($name: String) {
      pokemon(name: $name) {
        id
        name
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
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
  return (
    <div className="w-full border-2 rounded-md p-2">
      <div className="font-bold">Attack Moves</div>
      <div className="grid grid-cols-6">
        <div className="border-r-2">Type</div>
        <div className="col-span-3 border-r-2">Name</div>
        <div className="border-r-2">Power</div>
        <div>Category</div>
      </div>
      {data["pokemon"]["attacks"]["fast"].map(
        (move: { name: string; damage: number; type: string }) => {
          return (
            <div
              className="grid grid-cols-6"
              key={`${move.name}${children.children}`}
            >
              <div className="border-r-2  border-t-2">
                <Type>{move.type}</Type>
              </div>
              <div className="col-span-3 border-r-2 border-t-2">
                {move.name}
              </div>
              <div className="border-r-2 border-t-2">{move.damage}</div>
              <div className="border-t-2">Physical</div>
            </div>
          );
        }
      )}
      {data["pokemon"]["attacks"]["special"].map(
        (move: { name: string; damage: number; type: string }) => {
          return (
            <div
              className="grid grid-cols-6"
              key={`${move.name}${children.children}`}
            >
              <div className="border-r-2  border-t-2">
                <Type>{move.type}</Type>
              </div>
              <div className="col-span-3 border-r-2 border-t-2">
                {move.name}
              </div>
              <div className="border-r-2 border-t-2">{move.damage}</div>
              <div className="border-t-2">Special</div>
            </div>
          );
        }
      )}
    </div>
  );
};
