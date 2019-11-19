const mongoose = require('mongoose');

const {Schema} = mongoose;

const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = 'secret';
// user schema
const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: String,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});
// user methods
userSchema.statics.createUser = async (email, username, password) => {
	// make new instance of user
	const user = await new User({email, username, password});
	// hash user password then return the user
	user.password = await bcryptjs.hash(user.password, 10);
	return user.save();
};

userSchema.statics.login = async (email, password) => {
	// check if user exits
	const user = await User.findOne({email});
	if (!user) {
		throw new Error('user not found');
	}
	// if user, verify the user password with the password provided
	const verify = await bcryptjs.compare(password, user.password);
	if (!verify) {
		throw new Error('password not match');
	}
	// assign the user a token
	const token = jwt.sign(
		{
			user,
		},
		SECRET,
		{
			expiresIn: '2d',
		}
	);
	return token;
};
//authentication strategy for users
userSchema.statics.auth = async (token) => {
	try {
		//verify jwt
		const {user} = await jwt.verify(token, SECRET);
		// assign the user to req.user
		return user;
	} catch (err) {
		console.log(err);
	}
};

const User = mongoose.model('User', userSchema);

module.exports = User;
