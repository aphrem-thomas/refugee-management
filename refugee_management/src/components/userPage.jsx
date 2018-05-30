import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import UserLabel from './userLabel.jsx';
import UserMedicalRecord from './userMedicalRecord.jsx';
import UserVaccineRecord from './userVaccineRecord.jsx';
import PhysicianVaccineRecord from './physicianvaccinerecord.jsx';
// import SupplyChain from './components/supplyChainHome.jsx';
import RecordButton from './recordbuttons.jsx';
class UserPage extends React.Component{
  render() {
    
    return (
      <BrowserRouter>
      <div>
        <UserLabel name="Adam" age="28" gender="Male"/>
        <Route exact path='/refugeesecondpage/refugeesingin/user/' component={RecordButton}/>
        <Route exact path='/refugeesecondpage/physiciansignin/user/' component={RecordButton}/>
        <Route exact path='/refugeesecondpage/refugeesingin/user/usermedicalrecord/' component={UserMedicalRecord}/>
        <Route exact path='/refugeesecondpage/refugeesingin/user/uservaccinerecord/' component={UserVaccineRecord}/>
        <Route exact path='/refugeesecondpage/physiciansignin/user/uservaccinerecord' component={PhysicianVaccineRecord}/>
      </div>
      </BrowserRouter>

    );
    
  }
}

export default UserPage;
