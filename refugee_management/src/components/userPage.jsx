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
import Childpage from './childHealtRecord.jsx';
import physicianChildRecord from './physicianChildRecord.jsx';
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
          <Route exact path='/refugeesecondpage/refugeesingin/user/usermedicalrecord/' component={props => <UserMedicalRecord {...props} returnpath="/refugeesecondpage/refugeesingin/user" />}/>
          <Route exact path='/refugeesecondpage/refugeesingin/user/uservaccinerecord/' component={props => <UserVaccineRecord {...props} returnpath="/refugeesecondpage/refugeesingin/user" />}/>
          <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/' component={UserChildRecord} />
          <Route exact path='/refugeesecondpage/physiciansignin/user/childrecord/' component={physicianChildRecord}/>
          <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/childspage' component={Childpage} />
          <Route exact path='/refugeesecondpage/physiciansignin/user/childrecord/childspage' component={Childpage} />
          <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/medicalrecord/' component={props => <UserMedicalRecord {...props} returnpath="/refugeesecondpage/refugeesingin/user/childrecord/"/>}/>
          <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/vaccinerecord/' component={props => <UserVaccineRecord {...props} returnpath="/refugeesecondpage/refugeesingin/user/childrecord/" />}/>
          <Route exact path='/refugeesecondpage/physiciansignin/user/uservaccinerecord' component={props => <PhysicianVaccineRecord {...props} returnpath="/refugeesecondpage/physiciansignin/user/" />}/>
          <Route exact path='/refugeesecondpage/physiciansignin/user/usermedicalrecord' component={props => <PhysicianMedicalRecord {...props} returnpath="/refugeesecondpage/physiciansignin/user/" />}/>
          <Route exact path='/refugeesecondpage/physiciansignin/user/childrecord/vaccinerecord/' component={props => <PhysicianVaccineRecord {...props} returnpath="/refugeesecondpage/physiciansignin/user/childrecord" />}/>
          <Route exact path='/refugeesecondpage/physiciansignin/user/childrecord/medicalrecord/' component={props => <PhysicianMedicalRecord {...props} returnpath="/refugeesecondpage/physiciansignin/user/childrecord" />}/>
        
        </div>
      </BrowserRouter>

    );

  }
}

export default UserPage;
