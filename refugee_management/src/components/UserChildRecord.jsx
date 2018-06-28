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

class UserChildRecord extends React.Component {
  onClick1(item){
    
   
        //console.log("data in vaccineCardCross"+data);
        // this.refs.donebtn.setAttribute("disabled","disabled");
                let data={
                  transactionName:"Vaccination",
                  refugee:this.props.Ref.refugeeId,
                  doctor:this.props.doctor,
                  vaccine:this.props.vaccine,
                  quantity:2,
                  location: this.props.location,
                  camp: this.props.camp,
                  date: this.props.date
                }
               
    this.props.dispatch(actionCreator.fetch(item)).then(()=>{
      this.props.history.push("/refugeesecondpage/refugeesingin/user/childrecord/childspage");
    })
  }

  
   
  moveBack(e){
    this.props.history.push("/refugeesecondpage/refugeesingin/user/");
}
  render() {

    return (
      <div>
        <button className="btn btn-light m-3 backbutton" onClick={this.moveBack.bind(this)}><span><i className="material-icons backbtn">arrow_back</i></span></button>
        <h3 className="orangefont mx-2">children</h3>
        <div>
          {
            this.props.children.map((item,i)=>{
              <ChildCard key={i} name={item.name} dob={item.dob} image={item.refugeeImage} onClick={(e)=>{e.preventDefault();this.onClick1(item)}}/>
            })
          }
        </div> 
      </div>

    );

  }
}

function mapStateToProps(state,ownProps){
  console.log("children are:"+state.Child)
  return({
    Doc:state.DoctorDetails,
    Ref:state.RefugeeDetails,
    children:state.Child
  });
}

export default connect(mapStateToProps)(UserChildRecord);
