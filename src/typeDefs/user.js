const {gql} = require('apollo-server-express');

const user = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    password: String!
    createAt: String!
  }
`;

module.exports = {
	user,
};
