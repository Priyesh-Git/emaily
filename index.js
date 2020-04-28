// loads express modules
const express = require('express');

// loads mongoose modules
const mongoose = require('mongoose');

const keys = require('./config/keys');

// Execute the Models Code. This should be done before Passort require statement
// User Schema definition is required in one of callback in Passport.
require('./models/User');

// Execute the Passport Code
require('./services/passport');

run().catch(err => console.log(err));

async function run() {
  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useNewUrlParser', true);

  await mongoose.connect(keys.mongoURI);
}

// put the instance in a variable
const app = express();

//authRoutes(app);
require('./routes/authRoutes')(app);

// Heroku has its own variable which is read once the code runs in there cloud
const PORT = process.env.PORT || 5000;

// Will listen for requests coming on this port and return response accordingly
app.listen(PORT);
