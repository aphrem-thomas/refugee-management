import React from 'react';
import mui from 'material-ui';
import AlarmIcon from 'react-material-icons/icons/action/alarm';
import {connect}from 'react-redux';
import axios from 'axios';
import * as actionCreator from './action/actionCreator.js'; 
import baby1 from '../images/baby1.jfif';
import baby2 from '../images/baby2.jpg';
import baby3 from '../images/baby3.jpg';
class PhysicianChildRecord extends React.Component {
  onClick1(e){
    e.preventDefault();
   
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
               
    this.props.dispatch(actionCreator.fetch("rf100")).then(()=>{
      this.props.history.push("/refugeesecondpage/physiciansignin/user/childrecord/childspage");
    })
  }

  onClick2(e){
    e.preventDefault();
   
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
               
    this.props.dispatch(actionCreator.fetch("rf101")).then(()=>{
      this.props.history.push("/refugeesecondpage/physiciansignin/user/childrecord/childspage");
    })
  }

  onClick3(e){
    e.preventDefault();
   
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
               
    this.props.dispatch(actionCreator.fetch("rf103")).then(()=>{
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
        <h3 className="orangefont mx-2">children</h3>
        <div className="card mx-2">
        <div className="row">
        <div className="col-3">
        <img className="card-img-left img-responsive img-circle" width="100" height="100" src="https://i.stack.imgur.com/l60Hf.png" alt="Card image cap"/>
        </div>
        <div className="col-6">
        <div className="card-body mt-0">
          <h5 className="card-title">James Archer</h5>
          <p className="card-text">DOB: 29-June-2017</p>
        </div>
        </div>
        <span className="col-3 align-items-center">
        <button onClick={this.onClick1.bind(this)} className="btn btn-primary btn-lg babybuttton">></button>
        </span>
        </div>
      </div>

      
        <div className="card mx-2">
        <div className="row">
        <div className="col-3">
        <img className="card-img-left img-responsive img-circle" width="100" height="100" src="https://i.stack.imgur.com/l60Hf.png" alt="Card image cap"/>
        </div>
        <div className="col-6">
        <div className="card-body mt-0">
          <h5 className="card-title">Judy Archer</h5>
          <p className="card-text">DOB: 20-July-2016</p>
        </div>
        </div>
        <span className="col-3 align-items-center">
        <button onClick={this.onClick2.bind(this)} className="btn btn-primary btn-lg babybuttton ">></button>
        </span>
        </div>
      </div>


       
        <div className="card mx-2">
        <div className="row">
        <div className="col-3">
        <img className="card-img-left img-responsive img-circle" width="100" height="100" src="https://i.stack.imgur.com/l60Hf.png" alt="Card image cap"/>
        </div>
        <div className="col-6">
        <div className="card-body mt-0">
          <h5 className="card-title">Jacob Archer</h5>
          <p className="card-text">DOB: 20-July-2018</p>
        </div>
        </div>
        <span className="col-3  align-items-center">
        <button onClick={this.onClick3.bind(this)} className="btn btn-primary btn-lg babybuttton">></button>
        </span>
        </div>
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

export default connect(mapStateToProps)(PhysicianChildRecord);
