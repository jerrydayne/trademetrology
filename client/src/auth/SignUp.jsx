import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../actions/auth';
import Navigation from '../components/navigation';

const initialState = { 
  userType: '', 
  companyWesite: '',
  companyName: '',
  rcNumber: '',
  representativeName: '',
  representativePhone: '',
  representativeEmail: '',
  companyAddress: '',
  companyState: '',
  companyLGA: '',
  companyUsername: '',
  companyPassword: '',
  companyPasswordConfirm: '',
  securityQuestion: '',
  securityAnswer: ''
 }

const SignUp = () => {
  const [signUpData, setSignUpData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(signup( signUpData, history ));
  };

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name] : e.target.value });
  };

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    return (
      <>
      <Navigation />
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Sign Up</h2>
                  <p>Welcome, kindly fill in the form below to register your company.</p>
                </div>
                <form name="signUpForm" id="signUpForm" onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          type="select"
                          id="userType"
                          name="userType"
                          className="form-control"
                          placeholder="Select User Type"
                          
                          onChange={handleChange}
                        >
                        <option selected>User Type</option>
                        <option value="user">User</option>
                        <option value="WMDInspector">WMD Inspector</option>
                        <option value="CPIInspector">CPI Inspector</option>
                        <option value="calibrator">Calibrator</option>
                        <option value="authorizedVerifier">Authorized Verifier</option>
                        </select>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="website"
                          name="userType"
                          className="form-control"
                          placeholder="Company's Website"
                          
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="nameOfCompany"
                          name="userType"
                          className="form-control"
                          placeholder="Name Of Company"
                          
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="rcNumber"
                          name="userType"
                          className="form-control"
                          placeholder="RC Number"
                          
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="nameOfRepressentative"
                          name="userType"
                          className="form-control"
                          placeholder="Name (Repressentative)"
                          
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="phoneRepressentative"
                          name="userType"
                          className="form-control"
                          placeholder="Phone Number (Repressentative)"
                          
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="email"
                          id="emailRepressentative"
                          name="userType"
                          className="form-control"
                          placeholder="Email (Repressentative)"
                          
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          type="select"
                          id="state"
                          name="userType"
                          className="form-control"
                          placeholder="State"
                          
                          onChange={handleChange}
                        >
                        <option selected>State</option>
                        <option value="State">State</option>
                        </select>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          type="text"
                          id="lga"
                          name="userType"
                          className="form-control"
                          placeholder="L.G.A"
                          
                          onChange={handleChange}
                        >
                        <option selected>L.G.A</option>
                        <option value="local government area">LOcal Government Area</option>
                        </select>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="address"
                      id="address"
                      name="userType"
                      className="form-control"
                      rows="4"
                      placeholder="Registered Address"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                    <p className="company-credentials">COMPANY LOGIN CREDENTIAL</p>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="companyEmail"
                          name="email"
                          className="form-control"
                          placeholder="Company's Email"
                          
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="companyPassword"
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="passwordConfirm"
                          name="passwordConfirm"
                          className="form-control"
                          placeholder="Repeat Password"
                          
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                <div className="col-md-6">
                      <div className="form-group">
                        <select
                          type="select"
                          id="securityQuestion"
                          name="securityQuestion"
                          className="form-control"
                          placeholder="Select Security Question"
                          
                          onChange={handleChange}
                        >
                        <option selected>Select Security Question</option>
                        <option value="company's birthday">Company's Birthday</option>
                        <option value="ceo's middlename">CEO's Middlename</option>
                        <option value="first MD">First MD</option>
                        <option value="first office address">First Office Address</option>
                        <option value="first project">First Project</option>
                        <option value="reg number">Reg Number</option>
                        </select>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="securityAnswer"
                          name="securityAnswer"
                          className="form-control"
                          placeholder="Answer"
                          
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Register
                  </button>
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

export default SignUp
