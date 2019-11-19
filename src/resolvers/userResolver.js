const userResolver = {
	Query: {
		async getUser(root, args, { DB }) {
			const { token } = args;
			const user = await DB.User.auth(token);
			user.id = user._id;
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
