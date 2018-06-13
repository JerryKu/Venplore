module.exports = function(app, passport) {

  // process the login form
  // app.post('/login', do all our passport stuff here);

  // process the signup form
  app.post('/signup', 
  (req, res, next) => {
    passport.authenticate('local-signup', (err, user, responseMessage) => {
      if(err) { return res.json({ message: err }) }
      if(!user) { 
        return res.status(200).json({ 
        responseMessage,
        redirectUrl: '/signup'
       })
      }
      return res.status(200).json({
        responseMessage,
        redirectUrl: '/login'
      })
    })(req, res, next);
  }
);


  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });
};

