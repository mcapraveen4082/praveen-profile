import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ParallaxEffect from './Component/ParallaxEffect';
import './App.css';


import { connect } from 'react-redux';


class App extends Component{
    constructor(){
        super();
    }

  render(){
    return (
        <div className="App">
            <ParallaxEffect />
        </div>
    );
  }
}


export default (App)
