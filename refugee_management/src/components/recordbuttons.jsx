import React from 'react';
import {Route, Link} from 'react-router-dom';
import UserLabel from './userLabel.jsx';
import UserMedicalRecord from './userMedicalRecord.jsx';
import * as actionCreator from './action/actionCreator.js';
import {connect} from 'react-redux';
// import SupplyChain from './components/supplyChainHome.jsx';

class RecordButton extends React.Component{
    constructor(props){
        super(props);
    }
    moveBack(e){
        this.props.history.push("/refugeesecondpage/refugeesingin");
    }
    childRecord(e){
        e.preventDefault();
        let arrayChildren=[];
        let children1=this.props.Ref.children;
        console.log(children1);
        if(children1){
            children1.map((item)=>{
                let child1=item.child.split('#');
                arrayChildren.push(child1[1])
            })
        }
        arrayChildren.map((item)=>{
            
        })
        this.props.dispatch(actionCreator.updateChildren(arrayChildren)).then(()=>{
            this.props.history.push("/refugeesecondpage/refugeesingin/user/childrecord/");
        })
        

    }

  render() {
    
    return (
        
        <div className="container">
            <a href="/refugeesecondpage/refugeesingin"><button className="btn btn-light m-3 backbutton"><span><i className="material-icons backbtn">arrow_back</i></span></button></a>
            <div className="border rounded mx-2">
            <div className="row ">
                <div className="col-12"><h3 className="orangefont p-2">Personal EHR</h3></div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Link to='/refugeesecondpage/refugeesingin/user/usermedicalrecord/' className='p-1'>
                        <button type="button" className="btn btn-primary btn-lg btn-block ml-2">Medical Record</button>
                    </Link>
                </div>
                <div className="col-6"> 
                    <Link to='/refugeesecondpage/refugeesingin/user/uservaccinerecord/' className='p-1'>
                        <button type="button" className="btn btn-primary btn-lg btn-block ml-0">Vaccine Record</button>
                    </Link>
                </div>
            </div>
            </div>
            <div className="border rounded mx-2 mt-2">
                <div className="row">
                    <div className="col-12"><h3 className="orangefont p-2">Dependent's EHR</h3></div>
                </div>
                <div className="row">
                    {/* <div className="col-6 mb-2">
                     <div className='p-1'>
                        <button type="button" className="btn btn-primary btn-block btn-lg mx-2" onPress={this.parentRecord.bind(this)}>Parents</button>
                    </div>
                    </div>
                */}
                    <div className="col-6 mb-2">
                     <div className='p-1'>
                        <button type="button" className="btn btn-primary btn-block btn-lg ml-0"onClick={this.childRecord.bind(this)}>Children</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="float-right mx-3"><a href="/">Logout</a></div>
        </div>
     

    );
    
  }
}

function mapStateToProps(state,ownProps){
    console.log("inside recordbutton map"+JSON.stringify(state.RefugeeDetails));
    return({
        Ref:state.RefugeeDetails,
        Doc:state.DoctorDetails
    })
}

export default connect(mapStateToProps)(RecordButton);


