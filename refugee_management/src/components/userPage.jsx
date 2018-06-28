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
          <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/' component={UserChildRecord} />
          <Route exact path='/refugeesecondpage/refugeesingin/user/parentrecord/' component={UserChildRecord} />
          <Route exact path='/refugeesecondpage/refugeesingin/user/medicalrecord/' component={props => <UserMedicalRecord {...props} returnpath="/refugeesecondpage/refugeesingin/user" />}/>
          <Route exact path='/refugeesecondpage/refugeesingin/user/vaccinerecord/' component={props => <UserVaccineRecord {...props} returnpath="/refugeesecondpage/refugeesingin/user" />}/>
          
          <Route exact path='/refugeesecondpage/physiciansignin/user/' component={RecordButtonDoc} />
          <Route exact path='/refugeesecondpage/physiciansignin/user/childrecord/' component={physicianChildRecord}/>
          <Route exact path='/refugeesecondpage/physiciansignin/user/parentrecord/' component={physicianChildRecord}/>
          <Route exact path='/refugeesecondpage/physiciansignin/user/vaccinerecord' component={props => <PhysicianVaccineRecord {...props} returnpath="/refugeesecondpage/physiciansignin/user/" />}/>
          <Route exact path='/refugeesecondpage/physiciansignin/user/medicalrecord' component={props => <PhysicianMedicalRecord {...props} returnpath="/refugeesecondpage/physiciansignin/user/" />}/>

          <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/childspage' component={Childpage} />
          <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/childspage/vaccinerecord' component={UserVaccineRecord} />
          <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/childspage/medicalrecord' component={UserMedicalRecord} />

          <Route exact path='/refugeesecondpage/refugeesingin/user/parentrecord/parentpage' component={Childpage} />
          <Route exact path='/refugeesecondpage/refugeesingin/user/parentrecord/parentpage/vaccinerecord' component={UserVaccineRecord} />
          <Route exact path='/refugeesecondpage/refugeesingin/user/parentrecord/parentpage/medicalrecord' component={UserMedicalRecord} />

          <Route exact path='/refugeesecondpage/physiciansignin/user/childrecord/childspage' component={Childpage}/>
          <Route exact path='/refugeesecondpage/physiciansignin/user/childrecord/childspage/vaccinerecord' component={PhysicianVaccineRecord}/>
          <Route exact path='/refugeesecondpage/physiciansignin/user/childrecord/childspage/meciacalrecord' component={PhysicianMedicalRecord}/>

          <Route exact path='/refugeesecondpage/physiciansignin/user/parentrecord/parentpage' component={Childpage}/>
          <Route exact path='/refugeesecondpage/physiciansignin/user/parentrecord/parentpage/vaccinerecord' component={PhysicianVaccineRecord}/>
          <Route exact path='/refugeesecondpage/physiciansignin/user/parentrecord/parentpage/medicalrecord' component={PhysicianMedicalRecord}/>

          <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/medicalrecord/' component={props => <UserMedicalRecord {...props} returnpath="/refugeesecondpage/refugeesingin/user/childrecord/"/>}/>
          <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/vaccinerecord/' component={props => <UserVaccineRecord {...props} returnpath="/refugeesecondpage/refugeesingin/user/childrecord/" />}/>
          <Route exact path='/refugeesecondpage/physiciansignin/user/childrecord/vaccinerecord/' component={props => <PhysicianVaccineRecord {...props} returnpath="/refugeesecondpage/physiciansignin/user/childrecord" />}/>
          <Route exact path='/refugeesecondpage/physiciansignin/user/childrecord/medicalrecord/' component={props => <PhysicianMedicalRecord {...props} returnpath="/refugeesecondpage/physiciansignin/user/childrecord" />}/>
        
        </div>
      </BrowserRouter>

    );

  }
}

export default UserPage;
