const { gql } = require('apollo-server-express');

const mutation = gql`
  type Mutation {
    createUser(email: String!, username: String!, password: String!): User!
    login(email: String!, password: String!): String!
  }
`;

module.exports = {
	mutation
};
