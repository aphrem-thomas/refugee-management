import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import FrontEndPageButton from './components/frontPageButtons'; 
import refugeeSecondPage from './components/refugeeSecondPage.jsx';
import supplysecondpage from './components/supplysecondpage.jsx';
import RefugeeSignIn from './components/refugeeSignIn.jsx';
import physicianSignIn from './components/physicianSignIn.jsx';
import user from './components/userPage.jsx';
import vendorsignin from './components/vendorSignIn.jsx';
import Medicaldashboard from './components/medicaldashboard.jsx';
import Medicalpublic from './components/medicalpublic.jsx';
import Navbar from './components/Navbar.jsx'
class App extends Component {
 
  render() {
    
    return (
      <div className='container h-100 cartoonpage'>
      <Navbar title="ReACH"/>
        <Route exact path='/' component={FrontEndPageButton}/>
        <Route exact path='/refugeesecondpage' component={refugeeSecondPage}/>
        <Route exact path='/supplysecondpage' component={supplysecondpage}/>
        <Route exact path='/refugeesecondpage/refugeesingin' component={RefugeeSignIn}/>
        <Route exact path='/refugeesecondpage/physiciansignin' component={physicianSignIn}/>
        <Route exact path='/refugeesecondpage/refugeesingin/user' component={user}/>
        <Route exact path='/refugeesecondpage/physiciansignin/user' component={user}/>
        <Route exact path='/refugeesecondpage/physiciansignin/user' component={user}/>
        <Route exact path='/supplysecondpage/vendorlogin' component={vendorsignin}/>
        <Route exact path='/supplysecondpage/vendorlogin/user' component={Medicaldashboard}/>
        <Route exact path='/supplysecondpage/public' component={Medicalpublic}/>
      </div>
    );
    
  }
}

export default App;
