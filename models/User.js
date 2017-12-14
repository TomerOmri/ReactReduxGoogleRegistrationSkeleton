const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    displayName: String
});

// put on mongoose model new collection named users with type userSchema
mongoose.model('users', userSchema);