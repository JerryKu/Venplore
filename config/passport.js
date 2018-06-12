const LocalStrategy = require('passport-local').Strategy;
const connection = require('../database/index');

module.exports = function(passport) {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    connection.db.collection('user').find({id: id}).then(function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true
  },
  function(req, email, password, done) {
      process.nextTick(() => {
        console.log('getting called')
        connection.db.collection('users').find({'local.email': email}).toArray()
          .then((user) => {
            console.log('found users', user)
            if (user.length > 0) {
                return done(null, false, console.log('signupMessage', 'That email is already taken.'));
            } else {
              //TO DO: Hash password
              // maybe seperate this out into a seperate function
              connection.db.collection('users').insertOne({
                local:{
                  email: email,
                  password: password
                }
              }).then(() =>{
                console.log('user ------------>', user)
                done(null, user)
              })
            }
        });    
      });
  }));
};