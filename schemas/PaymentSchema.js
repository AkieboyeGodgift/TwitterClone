const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: { type: String },
    email: { type: String, required: true, trim: true, unique: true }
}, { timestamps: true });

var User = mongoose.model('User', UserSchema);
module.exports = User;