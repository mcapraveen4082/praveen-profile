/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import ParallaxEffect from './Component/ParallaxEffect';
import './App.css';




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
