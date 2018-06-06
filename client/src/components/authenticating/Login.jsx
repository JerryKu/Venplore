import React from 'react';

const Login = (props) => {
  return <div>
      <form>
        Email: <input type="text" />
        Password: <input type="password" />
      </form>
      <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false" />
    </div>;
}

export default Login;