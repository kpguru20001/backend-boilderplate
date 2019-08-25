//required query fields and mutations
const { query } = require("./query");
const { mutation } = require("./mutation");
//required type defs
const { user } = require("./user");

const typeDefs = [user, query, mutation];

module.exports = {
  typeDefs
};
