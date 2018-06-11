import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import SignIn from './vendorSignIn.jsx';
import RefugeeHome from './refugeeHome.jsx';
import {connect} from 'react-redux';
import * as actionCreator from './action/actionCreator.js';

class Supplysecondpage extends React.Component{
    onClick(e){
        e.preventDefault();
        this.props.history.push("/supplysecondpage/public");
               
    }
    render(){
        return(
            <div className="container cartoonpage h-100">
                <div className="d-flex align-items-center h-100">
                    <div className="col-lg-12 col-sm-12">
                        <Link to='/supplysecondpage/vendorlogin' className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Vendor</button>
                        </Link>
                       
                        <div className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.onClick.bind(this)}>Public </button>
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