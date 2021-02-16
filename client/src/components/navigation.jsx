import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import Logo from '../dist/icons/logo.png'
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import Navbar from './Navbar';

function Navigation () {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();


  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/');
    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;
    console.log(token);

    //jwt manually

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location])
  

    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <div className="navbar-brand page-scroll ancho">
             <img src={Logo} alt="Trade Metrology logo" className="site-logo" component={Link} to="/" />
            </div>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            { user ? (<LoggedInNav logout={logout} /> ) : (<LoggedOutNav /> ) }
          </div>
        </div>
      </nav>
    );
  }

export default Navigation;
