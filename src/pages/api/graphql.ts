import "reflect-metadata";

import { DogResolver } from "@/graphql/resolvers";
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { buildSchema } from "type-graphql";

const schema = await buildSchema({
  resolvers:[DogResolver]
})

const server = new ApolloServer({
  schema,
});

export default startServerAndCreateNextHandler(server);