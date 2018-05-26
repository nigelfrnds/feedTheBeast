const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String },
    password: { type: String },
    username: { type: String },
    name: { type: String }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;