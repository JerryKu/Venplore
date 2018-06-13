const LocalStrategy = require('passport-local').Strategy;
const connection = require('../database/index');

module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    done(null, user.insertedId);
  });
  
  passport.deserializeUser((id, done) => {
    connection.db.collection('user').findOne({id: id}).then(function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, email, password, done) {
    connection.db.collection('users').find({'local.email': email}).toArray()
      .then((user) => {
        if (user.length > 0) { // if the email is already found in the database
            return done(null, false, 'This email address has already been taken.');
        } else { // if email is not found, at it do the database
          //TO DO: Hash password, maybe seperate this out into a seperate function
          connection.db.collection('users').insertOne({
            local:{
              email: email,
              password: password
            }
          }).then((newUser) =>{
            // get the actual user
            done(null, newUser, 'Sign up successful!')
          })
        }
    });    
  }));

  passport.use('local-login', new LocalStrategy({
    userNameFeild: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done) {
    connection.db.collection('users').findOne({'local.email': email})
      .then((user) => {
        if(err) return done(err);
        console.log(user);

      })
  }


  ))
};