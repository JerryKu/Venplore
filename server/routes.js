module.exports = function(app, passport) {

  // process the login form
  // app.post('/login', do all our passport stuff here);

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/finding', 
    failureRedirect : '/signup', 
  }));


  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });
};

