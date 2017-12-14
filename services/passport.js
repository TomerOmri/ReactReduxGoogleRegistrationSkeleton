const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')
const mongoose = require('mongoose');

const User = mongoose.model('users');                   // load the users from the mongoose model.

passport.serializeUser((user, done) => {           // generate internal indentifing, already know the user - push it to cookie
    done(null, user.id);
});

passport.deserializeUser((id, done) => {               // take back from the cookie
    User.findById(id)
    .then( (user) => done(null, user) );
});

                                                        // creating new instance of google strategy 2 args - object and callbac;
// passport.use(new GoogleStrategy({
//     clientID: keys.googleClientId,
//     clientSecret: keys.googleClientSecret,
//     callbackURL: '/auth/google/callback',
//     proxy: true
// }, (accessToken, refreshTocken, profile, done) => {
//                                                   // First we initate a search (query) on all the db
//                                                    // if not found we will create new 
//         User.findOne({ googleId: profile.id })      // findOne returns a promise, we will chane .then to get the promise with the data - meaning its asynchornous opreation
//             .then( (existingUser) => {
//                 if (existingUser){
//                     console.log('user already exists');              // we already have a record of the user 
//                     done(null, existingUser);                       // we say to passport we complete with done, 1. err object 2.instance
//                 } else {
//                     new User({                                      // we dont have record new user
//                         googleId: profile.id,
//                         displayName: profile.displayName })             //chane then so we make sure save will happen, then will get from save the user
//                         .save()      
//                         .then( user => done(null, user));
//                 }
//             });


// })); 


passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'auth/google/callback',
    proxy: true
}, 
async (accessToken, refreshTocken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });
    if (existingUser){
        console.log('user already exists');
        done(null, existingUser);
    } else {
        const newUser = await new User({
            googleId: profile.id,
            displayName: profile.displayName
        }).save()
        done(null, newUswer);
    }
}
));