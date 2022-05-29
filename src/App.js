import backgroundPhoto from './img/background-photo.jpg';
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import OffersPage from './pages/offersPage';
import offerArray from './data.json'



export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      offers : []
    };
  }

  componentDidMount() {
    // fetching from api 
    this.setState({
      offers: offerArray //result from query fetch....
    })
  }

  render() {
    return (
      <div>
        <div className="App">
        <OffersPage/>
        </div>
      </div>
    );
  }
}

