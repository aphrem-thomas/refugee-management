import React from 'react';
import mui from 'material-ui';
import AlarmIcon from 'react-material-icons/icons/action/alarm';
import {connect}from 'react-redux';
import axios from 'axios';
import * as actionCreator from './action/actionCreator.js'; 
import baby1 from '../images/baby1.jfif';
import baby2 from '../images/baby2.jpg';
import baby3 from '../images/baby3.jpg';
class ChildHealthRecord extends React.Component {
 

  render() {

    return (
      <div className="h-100">
       <div className="row">
        <div className="col-6"><button type="button" className="btn btn-primary btn-lg btn-block mt-0 mx-2">Vaccine Record</button></div>
        <div className="col-6"><button type="button" className="btn btn-primary btn-lg btn-block mt-0 mx-2">Health Record</button></div>
        {/* <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/childspage/' component={} /> */}

        
        
        </div>
       </div>
        
      

      

    );

  }
}

function mapStateToProps(state,ownProps){
  return({
    Doc:state.DoctorDetails,
    Ref:state.RefugeeDetails
  });
}

export default connect(mapStateToProps)(ChildHealthRecord);
