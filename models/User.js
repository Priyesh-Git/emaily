const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose; // Same as  above statement

const userSchema = new Schema({
  googleId : String
});

// Create a new collection called users with given Schema. This is our Model Class
mongoose.model('users',userSchema);
