import React, { Component } from 'react';

import Contact from '../components/contact';
import JsonData from '../data/data.json';

export class ContactUs extends Component {
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
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default ContactUs;
