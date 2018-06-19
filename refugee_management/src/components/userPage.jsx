import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import UserLabel from './userLabel.jsx';
import UserMedicalRecord from './userMedicalRecord.jsx';
import UserVaccineRecord from './userVaccineRecord.jsx';
import PhysicianVaccineRecord from './physicianvaccinerecord.jsx';
// import SupplyChain from './components/supplyChainHome.jsx';
import RecordButton from './recordbuttons.jsx';
import RecordButtonDoc from './recordbuttonsdoc.jsx';
import PhysicianMedicalRecord from './physicianmedicalrecord.jsx'
import UserChildRecord from './UserChildRecord.jsx';
import Navbar from './Navbar';
class UserPage extends React.Component {
  moveBack(e){
    this.props.history.push("/refugeesecondpage/refugeesingin/");
}
  render() {

    return (
      <BrowserRouter>
        <div className="RefugeeSignIn">
    
          <UserLabel />
          
          <Route exact path='/refugeesecondpage/refugeesingin/user/' component={RecordButton} />
          <Route exact path='/refugeesecondpage/physiciansignin/user/' component={RecordButtonDoc} />
          <Route exact path='/refugeesecondpage/refugeesingin/user/usermedicalrecord/' component={UserMedicalRecord} />
          <Route exact path='/refugeesecondpage/refugeesingin/user/uservaccinerecord/' component={UserVaccineRecord} />
          <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/' component={UserChildRecord} />
          <Route exact path='/refugeesecondpage/physiciansignin/user/uservaccinerecord' component={PhysicianVaccineRecord} />
          <Route exact path='/refugeesecondpage/physiciansignin/user/usermedicalrecord' component={PhysicianMedicalRecord} />
        </div>
      </BrowserRouter>

    );

  }
}

export default UserPage;
