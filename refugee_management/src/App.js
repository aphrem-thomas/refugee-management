import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import RefugeeHome from './components/refugeeHome.js';
import FrontEndPageButton from './components/frontPageButtons';
// import SupplyChain from './components/supplyChainHome.jsx';

class App extends Component {
 
  render() {
    
    return (
      <div className='container h-100'>
        <Route exact path='/' component={FrontEndPageButton}/>
        <Route exact path='/refugeehome' component={RefugeeHome}/>
      </div>
    );
    
  }
}

export default App;
