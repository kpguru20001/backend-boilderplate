const { AuthenticationError } = require('apollo-server-express');

const userResolver = {
	Query: {
		async getUser(root, args, { user }) {
			if (user === undefined) {
				throw new AuthenticationError('You must be logged in');
			}
			// returning new project
			else {
				return user;
			}
			return user;
		},
		getUsers: async (root, args, { DB }) => await DB.User.find({}).exec()
	},
	Mutation: {
		async createUser(root, args, { DB }) {
			const { username, email, password } = args;
			const user = await DB.User.createUser(email, username, password);
			return user;
		},
		async login(root, args, { DB }) {
			const { email, password } = args;
			const user = await DB.User.login(email, password);
			return user;
		}
	}
};

module.exports = {
	userResolver
};
