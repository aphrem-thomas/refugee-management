import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import SignIn from './vendorSignIn.jsx';
import RefugeeHome from './refugeeHome.jsx';
class Supplysecondpage extends React.Component{
    render(){
        return(
            <div className="container cartoonpage h-100">
                <div className="d-flex align-items-center h-100">
                    <div className="col-lg-12 col-sm-12">
                        <Link to='/supplysecondpage/vendorlogin' className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Vendor</button>
                        </Link>
                       
                        <Link to='/supplysecondpage/public' className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Public </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Supplysecondpage;