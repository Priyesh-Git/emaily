// library to authenticate users
const passport = require('passport');

// Strategies are defined for various authenticators
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Get the mongoose library for obtaining the User collection
const mongoose = require('mongoose');

// import keys from config folder which is ignored from git commit for security
const keys = require('../config/keys');

// Get the User Model Class which has 1:1 relation with a Collection
const User = mongoose.model('users');

passport.use(new GoogleStrategy({
  clientID : keys.googleClientID,
  clientSecret : keys.googleClientSecret,
  callbackURL : '/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
  // console.log('Access Token : ', accessToken);
  // console.log('Refresh Token : ',refreshToken);
   console.log('Profile : ',profile);

  // Create the Model Instance so that a new record will be created in database.
  // Save method persists the record from Mongoose library to Mongo DB.
  new User({ googleId : profile.id}).save();
}));
