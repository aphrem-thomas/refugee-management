import React from 'react';
import mui from 'material-ui';
import AlarmIcon from 'react-material-icons/icons/action/alarm';
import {connect}from 'react-redux';
import axios from 'axios';
import * as actionCreator from './action/actionCreator.js'; 
import baby1 from '../images/baby1.jfif';
import baby2 from '../images/baby2.jpg';
import baby3 from '../images/baby3.jpg';
import vaccinerecord from './userVaccineRecord.jsx'
import BrowserRouter from 'react-router-dom/BrowserRouter';
import {Route} from 'react-router-dom';
import UserMedicalRecord from './userMedicalRecord.jsx';
import UserVaccineRecord from './userVaccineRecord.jsx';

class ChildHealthRecord extends React.Component {
  constructor(props){
    super(props);
  }
  moveBack(e){
    console.log("inside moveback : "+this.props.Childs[0].parentId);
    this.props.dispatch(actionCreator.fetch(this.props.Childs[0].parentId)).then(()=>{
      this.props.history.push("/refugeesecondpage/refugeesingin/user/childrecord/");
    })
    
}
med(e){
  e.preventDefault();
  this.props.history.push("medicalrecord/");
}

vacc(e){
  e.preventDefault();
  this.props.history.push("vaccinerecord/");
}


  render() {

    return (
      
      <div className="h-100">
        <button className="btn btn-light m-3 backbutton" onClick={this.moveBack.bind(this)}><span><i className="material-icons backbtn">arrow_back</i></span></button>
       <div className="row">
        <div className="col-6"><button onClick={this.vacc.bind(this)} type="button" className="btn btn-primary btn-lg  mt-0 mx-2">Vaccine Record</button></div>
        <div className="col-6"><button onClick={this.med.bind(this)} type="button" className="btn btn-primary btn-lg  mt-0 ml-0 mr-2">Health Record</button></div>
        {/* <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/childspage/' component={} />
        <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/medicalrecord/' component={UserMedicalRecord} />
        <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/vaccinerecord/' component={UserVaccineRecord} /> */}

        </div>
       </div>
    

      

    );

  }
}

function mapStateToProps(state,ownProps){
  return({
    Doc:state.DoctorDetails,
    Ref:state.RefugeeDetails,
    Childs:state.Child
  });
}

export default connect(mapStateToProps)(ChildHealthRecord);
