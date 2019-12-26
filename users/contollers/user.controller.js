var mongoose = require('mongoose');
const UsersController = mongoose.model('Users', userSchema);

exports.insert = (req, res) => {
   let salt = crypto.randomBytes(16).toString('base64');
   let hash = crypto.createHmac('sha512', salt)
   const hast  = slat + 'hash' + hash;
}