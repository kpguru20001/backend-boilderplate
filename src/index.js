const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
require("./config");
//getting schemas for apollo graphql
const { typeDefs } = require("./typeDefs");
//Creating graphql resolvers
const { resolvers } = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
