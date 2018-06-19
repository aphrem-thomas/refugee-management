import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from "../images/reachlogo.jpg";
import collage from '../images/collage.jpg';
import RefugeeHome from './refugeeHome.jsx';
import Navbar from './Navbar.jsx';
class FrontEndPageButton extends React.Component{
    render(){
        
        return(
            <div className='cartoonpage h-100'>
                {/* <div className="card text-white bg-primary-frontpage">
                  <div className="card-body pt-1">
                      <div className="mt-0"><img className="mt-0" width="150" height="100" src={logo}/> </div>
                      <p className="card-text"><span className="fontred">RE</span>fugee <span className="fontred">A</span>ssistance in <span className="fontred">C</span>linics and <span className="fontred">H</span>ospitals</p>
                      <p className="card-text">Powered by Blockchain</p>
                    </div>
                  </div> */}
                  {/* <div className="row d-flex justify-content-center">
                      <img src={collage} height="300" width="350"/>
                    </div> */}
            <div className="frontpagebuttons h-100 mt-0 mx-2">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-4 col-sm-12 ">
                        <Link to='/refugeesecondpage' className='p-2'>
                            <button type="button" className="btn btn-primary btn-lg btn-block mt-0">Refugee Management</button>
                        </Link>
                        <Link to='/supplysecondpage' className='p-2'>
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