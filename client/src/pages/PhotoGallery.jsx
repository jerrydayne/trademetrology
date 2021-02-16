import React, { Component } from 'react';

import Gallery from '../components/gallery';
import Navigation from '../components/navigation';
import JsonData from '../data/data.json';

export class PhotoGallery extends Component {
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
        <Gallery />
      </div>
    )
  }
}

export default PhotoGallery;
