import React from 'react';
import mui from 'material-ui';
import AlarmIcon from 'react-material-icons/icons/action/alarm';
import {connect}from 'react-redux';
import axios from 'axios';
import * as actionCreator from './action/actionCreator.js'; 
import baby1 from '../images/baby1.jfif';
import baby2 from '../images/baby2.jpg';
import baby3 from '../images/baby3.jpg';
import ChildCard from './ChildCard.js';
class PhysicianChildRecord extends React.Component {
  onClick1(item){       
    this.props.dispatch(actionCreator.fetch(item)).then(()=>{
      this.props.history.push("/refugeesecondpage/physiciansignin/user/childrecord/childspage");
    })
  }

  
   
  moveBack(e){
    this.props.history.push("/refugeesecondpage/physiciansignin/user/");
}
  render() {

    return (
      <div>
        <button className="btn btn-light m-3 backbutton" onClick={this.moveBack.bind(this)}><span><i className="material-icons backbtn">arrow_back</i></span></button>
        
        
        {
            this.props.Children.map((item,i)=>{
              return <ChildCard key={i} name={item.name} dob={item.dob} image={item.image} childId={item.id} onClick={()=>{
                this.onClick1(item.id);
              }}/>
            })
          }
         
      </div>

    );

  }
}

function mapStateToProps(state,ownProps){
  return({
    Doc:state.DoctorDetails,
    Ref:state.RefugeeDetails,
    Children:state.Child
  });
}

export default connect(mapStateToProps)(PhysicianChildRecord);
