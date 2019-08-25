const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//getting the uri from the environment to be used in production.
var dotenv = require("dotenv");
dotenv.config();
var uri = process.env.MONGOLAB_URI;
var developerMode = true;
//in dev environment env doesnot exist so use alternative uri
if (uri === undefined) {
  if (!developerMode) {
    console.log(uri);
    uri = "mongodb://URL:27017/dbname";//change URL to Production Url of database mongo
  } else {
    uri = "mongodb://localhost:27017/dbname"; 
  }
}

mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${uri}`)
);
