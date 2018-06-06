import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from "./reach_logo.png";
import RefugeeHome from './refugeeHome.jsx';
class FrontEndPageButton extends React.Component{
    render(){
        
        return(
            <div className='cartoonpage h-100'>
                <div className="card text-white bg-primary-frontpage mb-3">
                  <div className="card-body">
                      <div><img src={logo}/> </div>
                      <p className="card-text"><span className="fontred">RE</span>fugee <span className="fontred">A</span>ssistance in <span className="fontred">C</span>linics and <span className="fontred">H</span>ospitals</p>
                      <p className="card-text">Powered by Blockchain</p>
                    </div>
                  </div>
            <div className="frontpagebuttons h-100">
                <div className="mt-5">
                    <div className="col-lg-12 col-sm-12">
                        <Link to='/refugeesecondpage' className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Refugee Management</button>
                        </Link>
                        <Link to='/supplysecondpage' className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Supply Chain </button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default FrontEndPageButton;