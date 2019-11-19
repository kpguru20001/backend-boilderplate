const { gql } = require('apollo-server-express');

const query = gql`
  type Query {
    getUser : User!,
    getUsers: [User]
  }
`;

module.exports = {
	query
};
