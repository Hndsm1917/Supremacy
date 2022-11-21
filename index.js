import express from 'express';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import keys from "./config/keys";

const app = express();
passport.use('', new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecretID: keys.googleClientSecretID,
  callbackUrl: '/auth/google/callback',
}, (accessToken) => {
  console.log(accessToken);
}))

const PORT = process.env.PORT || 5000;

app.listen(PORT);