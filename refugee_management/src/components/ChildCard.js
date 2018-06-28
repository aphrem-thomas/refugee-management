import React from 'react';
import * as actionCreator from './action/actionCreator.js';
import {connect} from 'react-redux';

class ChildCard extends React.Component{
    constructor(props){
        super(props);
        console.log("inside child card");
    }
    onClick2(){
        this.props.dispatch(actionCreator.fetch(this.props.id)).then(()=>{
            this.props.history.push("/refugeesecondpage/refugeesingin/user/childrecord/childspage/");
        });
        
    }
    render(){
        return(
            <div className="card mx-2">
            <div className="row">
            <div className="col-3">
            <img className="card-img-left img-responsive img-circle" width="100" height="100" src={this.props.image} alt="Card image cap"/>
            </div>
            <div className="col-6">
            <div className="card-body mt-0">
              <h5 className="card-title">{this.props.name}</h5>
              <p className="card-text">{this.props.dob}</p>
            </div>
            </div>
            <span className="col-3 align-items-center">
            <button onClick={this.props.onClick} className="btn btn-primary btn-lg babybuttton ">></button>
            </span>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state,ownProps){
    return({Ref:state.RefugeeDetails});
}

export default connect(mapStateToProps)(ChildCard);