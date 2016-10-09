var bcrypt = require('bcrypt-nodejs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var user = require('../models').user;

function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}

passport.use(new LocalStrategy({
  usernameField: 'email',
},
  (email, password, done) => {
    user.findOne({
      where: { email },
    }).then((user) => {
      if (user == null || passwordsMatch(password, user.password) === false) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }
      return done(null, user, { message: 'Successfully Logged In!' });
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser((user_id, done) => {
  user.findById(user_id).then((user) => {
    if (user == null) {
      return done(null, false);
    }
    return done(null, user);
  });
});

passport.redirectIfLoggedIn = (route) =>
  (req, res, next) => (req.user ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

module.exports = passport;
