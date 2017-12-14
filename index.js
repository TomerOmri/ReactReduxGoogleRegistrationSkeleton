const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// Invokes the modules when the app starts
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

// telling app we are using cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,            // 30days 24hours 60min 60sec 1000mils
        keys: [keys.cookieKey]                      // encrypt cookie
    })
);

app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
const port = process.env.PORT || 5000;
app.listen(port);