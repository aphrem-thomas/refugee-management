import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import SignIn from './SignIn.jsx';
import RefugeeHome from './refugeeHome.jsx';
class FrontEndPageButton extends React.Component{
    render(){
        return(
            <div className="container h-100">
                <div className="d-flex align-items-center h-100">
                    <div className="col-lg-12 col-sm-12">
                        <Link to='/refugeehome' className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Refugee Management</button>
                        </Link>
                        <Link to='/supplychain' className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Supply Chain </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontEndPageButton;