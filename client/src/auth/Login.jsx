import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux'
import { signin } from '../actions/auth';
import Navigation from '../components/navigation';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [signInData, setSignInData] = useState({ email: '', password: '' });

  const { email, password } = signInData;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin( signInData, history ));
  };

  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.name] : e.target.value });
  };

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const googleSuccess = async ( res ) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      
      history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log("Google Sign In was Unsuccessful. Try again")
  };
  
    return (
      <>
      <Navigation />
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <form name="logInForm" id="logInForm" onSubmit={handleSubmit} noValidate>
                <div className="section-title">
                  <h2>Login</h2>
                  <p>
                    USE
                  <GoogleLogin
                    clientId="417591693482-1irjqlj70v03e8m90aivn3boctvkr6e7.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <div 
                        className="btn btn-google btn-lg"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      > <i className="fa fa-google"></i>oogle Sign In</div>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                    />  OR THE FORM BELOW.
                  </p>
                </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="email"
                          label="Email"
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="password"
                          label="Password"
                          type={showPassword ? "text" : "password"}
                          id="password"
                          className="form-control"
                          placeholder="Password"
                          required="required"
                          onChange={handleChange}
                          handleShowPassword={handleShowPassword}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Login
                  </button>
                  <Link to="/passwordreset" ><p>forgot password?</p></Link>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  Abuja, Nigeria
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  080123456789
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  contact@trademetrology@.com
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                <ul>
                    <li>
                    <Link to="/"><i className="fa fa-facebook"></i></Link>
                    </li>
                    <li>
                        <Link to="/"><i className="fa fa-twitter"></i></Link>
                    </li>
                    <li>
                    <Link to="/"><i className="fa fa-youtube"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Login
