import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import './fonts.css';
import NavBar from './components/NavBar.js'
import Banner from './components/Banner.js';


import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      <BrowserRouter>
      
      <div className="App">
        <Banner/>
       <NavBar/>
      
       
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
