import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import collage from '../images/collage.jpg';
import RefugeeHome from './refugeeHome.jsx';
import Navbar from './Navbar.jsx';
import logo from '../images/logoreachwhite.png';
class FrontEndPageButton extends React.Component {
    render() {

        return (
            <div className='cartoonpage h-100 frontpageimage'>
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
                <div className="d-flex justify-content-center mt-1">
                    <img height="100" width="200" src={logo} alt="Card image cap" />
                </div>
                <div className="d-flex justify-content-center ml-2 pt-2 px-5 pb-0">
                    <h2 className="whitefont"><span className="fontblue">Re</span>fugee <span className="fontblue">A</span>ssistance in <span className="fontblue">C</span>linics and<br /><span className="fontblue">H</span>ospitals</h2>
                </div>
                <h3 className="orangefont px-4">Powered by Blockchain</h3>
                <div className="frontpagebuttons h-100 mt-5 mx-2">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4 col-sm-12 ">
                            <Link to='/refugeesecondpage' className='p-2'>
                                <button type="button" className="btn btn-primary btn-lg btn-block mt-0">Refugee Management</button>
                            </Link>
                            <Link to='/supplysecondpage' className='p-2'>
                                <button type="button" className="btn btn-primary btn-lg btn-block">Medical Supply</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontEndPageButton;