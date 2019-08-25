const { gql } = require("apollo-server-express");

const mutation = gql`
  type Mutation {
    addUser(userName: String!, email: String!, phoneNumber: String!): User
  }
`;

module.exports = {
  mutation
};
