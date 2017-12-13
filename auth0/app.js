// app.js
const express = require('express');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const app = express();

// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: 'stephenhuh.auth0.com',
    clientID: 'Q1-oQU6_cG3UMJLLVfQ9BlF8HEGkF3rA',
    clientSecret: 'oRU3sd3a3iqCvSwjQC_Mr6cE8OomSuxoWUHzNqbrkb0ilrIqRvMPrKNeXLWqVnFN',
    callbackURL: 'http://localhost:3000/callback'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);

passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// ...
app.use(passport.initialize());
app.use(passport.session());

app.listen(3000, () => console.log('Example app listening on port 3000!'))
