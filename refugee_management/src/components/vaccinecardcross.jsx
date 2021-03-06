import React from 'react';
import mui from 'material-ui';
import AlarmIcon from 'react-material-icons/icons/action/alarm';
import {connect}from 'react-redux';
import axios from 'axios';
import * as actionCreator from './action/actionCreator.js'; 
class Vaccinecard extends React.Component {
  handleClick(e){
    e.preventDefault();
   
        //console.log("data in vaccineCardCross"+data);
        this.refs.donebtn.setAttribute("disabled","disabled");
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
               
    this.props.dispatch(actionCreator.updateVaccineRecord(this.props.Ref.refugeeId,data)).then(()=>{
      alert("sucessfully updated");
    })
  }
  
  render() {

    return (
      <div className="card border-dark mb-2 mx-2">
        <div className="card-header text-white bg-danger">
          {this.props.vaccine}<span><i className="material-icons tickicon">highlight_off</i></span>
        </div>
        <div className="card-body">
          <h5 className="card-title">Pending</h5>
            <p className="card-text">
            {
              this.props.doctor!=null?<button ref="donebtn" className='btn btn-primary' onClick={this.handleClick.bind(this)}>done</button>:null
            }
              
            </p>
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

export default connect(mapStateToProps)(Vaccinecard);
