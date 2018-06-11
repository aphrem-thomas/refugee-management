import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import doctor from '../images/doctor1.jpg';

class SecondPage extends React.Component{
    render(){
        return(
            <div className="container cartoonpage h-100">
                <div className="d-flex justify-content-center mt-3">
                    <img src={doctor} height="300" width="350"/>
                </div>
                <div className="row ">
                    <div className="col-lg-12 col-sm-12 mx-5">
                        <Link to='/refugeesecondpage/refugeesingin' className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Patient</button>
                        </Link>
                        <Link to='/refugeesecondpage/physiciansignin' className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Physician</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default SecondPage;