import React, { Component } from 'react';

import Navigation from '../components/navigation';
import Header from '../components/header';
import About from '../components/about';
import Newsline from '../components/newsline';
import Services from '../components/services';
import JsonData from '../data/data.json';

export class Home extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Newsline data={this.state.landingPageData.Newsline} />
      </div>
    )
  }
}

export default Home;
