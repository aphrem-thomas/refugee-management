import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import SignIn from './vendorSignIn.jsx';
import RefugeeHome from './refugeeHome.jsx';
import {connect} from 'react-redux';
import * as actionCreator from './action/actionCreator.js';

class Supplysecondpage extends React.Component{
    onClick(e){
        e.preventDefault();
        this.props.history.push("/supplysecondpage/unlogin");
               
    }
    moveBack(e){
        this.props.history.push("/");
    }
    render(){
        return(
            <div className="container cartoonpage h-100">
                <button className="btn btn-light m-3 backbutton" onClick={this.moveBack.bind(this)}><span><i className="material-icons backbtn">arrow_back</i></span></button>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-4 col-sm-12">
                        <Link to='/supplysecondpage/vendorlogin' className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Vendor</button>
                        </Link>
                       
                        <div className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.onClick.bind(this)}>Medical distribution</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
    return({Blood:state.BloodDetails});
}
export default connect(mapStateToProps)(Supplysecondpage);