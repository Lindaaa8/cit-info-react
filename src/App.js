import React, {Component} from 'react';
import {Collapse} from 'react-collapse';
import {Helmet} from 'react-helmet';
import logo from './logo.svg';
import MessageSection from './components/MessageSection';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectOpen: false,
      messageOpen: false,
      prayerOpen: false,
      songOpen: false,
      readingOpen: false,
      nextOpen: false,
      givingOpen: false,
      firstName: '',
      lastName: '',
      email: '',
    }
  }

  onConnectFormSubmit() {
    console.log(this.state.firstName);
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>CIT info</title>
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Church In Toronto</h1>
        </header>
        <div className="Main">
          <div className="Section">
            <div
              className="Section-title"
              onClick={() => this.setState({
                connectOpen: !this.state.connectOpen
              })}
            >
              Connect
            </div>
            <Collapse isOpened={this.state.connectOpen}>
              <div className="Section-content">
                <label className="Connect-form-label">
                  <span className="Connect-form-required">*</span> First Name:
                  <input
                    className="Connect-form-input"
                    type="text"
                    value={this.state.firstName}
                    onChange={(e) => this.setState({firstName: e.target.value})}
                  />
                </label>
                <label className="Connect-form-label">
                  <span className="Connect-form-required">*</span> Last Name:
                  <input
                    className="Connect-form-input"
                    type="text"
                    value={this.state.lastName}
                    onChange={(e) => this.setState({lastName: e.target.value})}
                  />
                </label>
                <label className="Connect-form-label">
                  <span className="Connect-form-required">*</span> Email:
                  <input
                    className="Connect-form-input"
                    type="text"
                    value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}
                  />
                </label>
                <button
                  className="Connect-form-submit"
                  onClick={() => this.onConnectFormSubmit()}
                >
                  Submit
                </button>
              </div>
            </Collapse>
          </div>
          <div className="Section">
            <div
              className="Section-title"
              onClick={() => this.setState({
                messageOpen: !this.state.messageOpen
              })}
            >
              Message Notes
            </div>
            <Collapse isOpened={this.state.messageOpen}>
              <div className="Section-content">
                <MessageSection />
              </div>
            </Collapse>
          </div>
          <div className="Section">
            <div
              className="Section-title"
              onClick={() => this.setState({
                prayerOpen: !this.state.prayerOpen
              })}
            >
              Prayer Requests
            </div>
          </div>
          <div className="Section">
            <div
              className="Section-title"
              onClick={() => this.setState({
                songOpen: !this.state.songOpen
              })}
            >
              Song List
            </div>
          </div>
          <div className="Section">
            <div
              className="Section-title"
              onClick={() => this.setState({
                readingOpen: !this.state.readingOpen
              })}
            >
              Bible Reading
            </div>
          </div>
          <div className="Section">
            <div
              className="Section-title"
              onClick={() => this.setState({
                nextOpen: !this.state.nextOpen
              })}
            >
              Next Step>
            </div>
          </div>
          <div className="Section">
            <div
              className="Section-title"
              onClick={() => this.setState({
                givingOpen: !this.state.givingOpen
              })}
            >
              Giving
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
