import React, { Component } from 'react';
import Series from './../assests/images/series.jpg';

export default class Home extends Component {

 
  render() {
    return (
      <div>
          <h1>HOME</h1>
          <img src={Series}></img>
      </div>
    )
  }
}
