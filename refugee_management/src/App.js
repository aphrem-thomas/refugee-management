import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import FrontEndPageButton from './components/frontPageButtons'; 
import refugeeSecondPage from './components/refugeeSecondPage.jsx';
import supplysecondpage from './components/supplysecondpage.jsx';
import SignIn from './components/refugeeSignIn.jsx';
import physicianSignIn from './components/physicianSignIn.jsx';

class App extends Component {
 
  render() {
    
    return (
      <div className='container h-100'>
        <Route exact path='/' component={FrontEndPageButton}/>
        <Route exact path='/refugeesecondpage' component={refugeeSecondPage}/>
        <Route exact path='/supplysecondpage' component={supplysecondpage}/>
        <Route path='/refugeesecondpage/refugeesingin' component={SignIn}/>
        <Route path='/refugeesecondpage/physiciansignin' component={physicianSignIn}/>
      </div>
    );
    
  }
}

export default App;
