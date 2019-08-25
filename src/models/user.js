const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema ({
    userName: String,
    email: String,
    phoneNumber: String
})