import React, { Component } from 'react';

import Navigation from '../components/navigation';
import About from '../components/about';
import Services from '../components/services';
import JsonData from '../data/data.json';

export class AboutUs extends Component {
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
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
      </div>
    )
  }
}

export default AboutUs;
