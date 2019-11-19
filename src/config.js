/* eslint-disable no-console */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//getting the uri from the environment to be used in production.
const dotenv = require('dotenv');
dotenv.config();
let uri = process.env.MONGOLAB_URI;
const developerMode = true;
//in dev environment env doesn't exist so use alternative uri
if (uri === undefined) {
	if (!developerMode) {
		console.log(uri);
		uri = 'mongodb://username:Pass@URL:27017/dbname';//change URL to Production Url of database mongo
	} else {
		uri = 'mongodb://localhost:27017/dbname';
	}
}

mongoose.connect(uri, { useCreateIndex: true, useNewUrlParser: true });
mongoose.connection.once('open', () =>
	console.log(`Connected to mongo at ${uri}`)
);
