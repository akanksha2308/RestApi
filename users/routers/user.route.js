var mongoose = require('mongoose');
User = mongoose.model('user');

module.exports = (app) => {

    app.post('/users', [
        usersController.insert
    ])
}