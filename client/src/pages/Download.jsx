import React, { Component } from 'react';

import Downloads from '../components/Downloads';
import JsonData from '../data/data.json';

export class Download extends Component {
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
        <Downloads data={this.state.landingPageData.Downloads} />
      </div>
    )
  }
}

export default Download;
