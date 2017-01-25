import React, { Component } from 'react';
import Festivals from './containers/Festivals';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { FooterData } from '../api/FooterData';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Festivals />
        <Footer data={FooterData}/>
      </div>
    );
  }
}
