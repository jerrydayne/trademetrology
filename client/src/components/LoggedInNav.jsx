import React from 'react';
import { Link } from 'react-router-dom';

const LoggedInNav = ({ logout }) => {

  
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
              <li>
                <Link to="/login" className="btn btn-register" onClick={logout} >
                  Log Out
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="page-scroll ancho">
                  Dashboard
                </Link>
              </li>
            </ul>
    )
}

export default LoggedInNav
