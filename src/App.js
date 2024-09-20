/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
// import ParallaxEffect from './Component/ParallaxEffect';
import './App.css';
import Portfolio from './Component/PortFolio';




class App extends Component{
    constructor(){
        super();
    }

  render(){
    return (
        <div className="App">
          <Portfolio/>
            {/* <ParallaxEffect /> */}
        </div>
    );
  }
}


export default (App)
