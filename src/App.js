import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNFO from './components/venue_nfo';
import Highlights from './components/highlights';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <VenueNFO />
        <Highlights />
      </div>
    );
  }
}

export default App;
