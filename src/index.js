//Modules imported
const { ApolloServer } = require('apollo-server-express');

//middleware
const express = require('express');
const morgan = require('morgan');

//models
const DB = require('./models');

// getting schemas for apollo graphql
const { typeDefs } = require('./typeDefs');

// Creating graphql resolvers
const { resolvers } = require('./resolvers');

//config for database connections
require('./config');

//create apollo server
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: {
		DB
	}
});
//create express
const app = express();
//add middleware
app.use(morgan('dev'));
//apply middleware
server.applyMiddleware({ app });
//listen on server with port 4000
app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
