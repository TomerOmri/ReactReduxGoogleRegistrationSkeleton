const passport = require('passport');

module.exports = app => {
    // turn on google stratgy and ask for profile and email
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/current_user', (req,res) => {
        res.send(req.user); //passport attaches automaticly user to req, and many more functions..one of the req.logout()
    });

    app.get('/api/logout', (req,res) => {
        req.logout();       // kills the cookie
        res.send(req.user);
    });

    app.get('/', (req,res) => {
        res.send({
            'hi': 'there'
        })
    });
}