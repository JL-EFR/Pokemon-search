import { InMemoryCache, ApolloClient } from "@apollo/client";

export const getClient = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache(),
});
