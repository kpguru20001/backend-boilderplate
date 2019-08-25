const { gql } = require("apollo-server-express");

const user = gql`
  type User {
    id: ID!
    userName: String
    email: String
    phoneNumber: String
  }
`;

module.exports = {
  user
};
