import React, { Component } from 'react';
import Festivals from './containers/Festivals';
import NavBar from './components/NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Festivals />
      </div>
    );
  }
}
