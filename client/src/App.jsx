import React from 'react';
import { Switch, Route } from 'react-router-dom';


import { AboutUs } from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Download from './pages/Download';
import Home from './pages/Home';
import News from './pages/News';
import PermitTracking from './pages/PermitTracking';
import PhotoGallery from './pages/PhotoGallery';
import SignUp from './auth/SignUp';
import Login from './auth/Login';
import PasswordReset from './auth/PasswordReset';
import Dashboard from './dashboard/Dashboard';

function App () {

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/permittracking" component={PermitTracking} />
          <Route exact path="/photogallery" component={PhotoGallery} />
          <Route exact path="/news" component={News} />
          <Route exact path="/download" component={Download} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/passwordreset" component={PasswordReset} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    )
}

export default App;
