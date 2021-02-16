import React, { Component } from 'react';

import Newsline from '../components/newsline';
import Services from '../components/services';
import JsonData from '../data/data.json';

export class News extends Component {
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
        <Newsline data={this.state.landingPageData.Newsline} />
        <Services data={this.state.landingPageData.Services} />
      </div>
    )
  }
}

export default News;
