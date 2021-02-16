import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutNav = () => {
    return (
        <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/" className="page-scroll ancho">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/permittracking" className="page-scroll ancho">
                  Permit Tracking
                </Link>
              </li>
              <li>
                <Link to="/photogallery" className="page-scroll ancho">
                  Photo Gallery
                </Link>
              </li>
              {/* <li>
                <Link to="/contact" className="page-scroll ancho">
                  Contact Us
                </Link>
              </li> */}
              <li>
                <Link
                  to="/signup"
                  className="btn btn-register"
                >
                Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login" className="page-scroll ancho" >
                  Log In
                </Link>
              </li>
            </ul>
    )
}

export default LoggedOutNav
