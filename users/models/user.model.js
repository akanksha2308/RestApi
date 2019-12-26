var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: String
});

module.exports = mongoose.model('Users', userSchema); 

