import React from 'react';
import { Link } from 'react-router-dom';


const PasswordResset = () => {

  const handleSubmit = () => {

  };

  const handleChange = () => {

  };
  
    return (
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Reset Password</h2>
                  <p>Enter the email address associated with the account</p>
                </div>
                <form name="resetPasswordForm" id="resetPasswordForm" onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                          handleChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                    <button type="submit" className="btn btn-permit btn-lg">
                    Reset Password
                  </button>
                    </div>
                  </div>
                  <div id="success"></div>
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
    )
}

export default PasswordResset
