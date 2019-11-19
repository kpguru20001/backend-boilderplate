const { gql } = require('apollo-server-express');

const query = gql`
  type Query {
    getUser(token: String!) : User!,
    getUsers: [User]
  }
`;

module.exports = {
	query
};
