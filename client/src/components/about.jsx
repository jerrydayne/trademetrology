import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/Trade and Investment.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>{this.props.data ? this.props.data.paragraph1 : 'loading...'}</p>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <h3>Mission Statement</h3>
                    <p>{this.props.data ? this.props.data.mission : 'loading...'}</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <h3>Vision Statement</h3>
                    <p>{this.props.data ? this.props.data.vision : 'loading...'}</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
                <p>{this.props.data ? this.props.data.paragraph2 : 'loading...'}</p>
                <h3>About Nigerco Nigeria Ltd. (The Consultant)</h3>
                <p>{this.props.data ? this.props.data.Nigerco : 'loading...'}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default about
