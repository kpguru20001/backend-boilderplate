const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    getUsers: [User]
  }
`;

module.exports = {
  query
};
