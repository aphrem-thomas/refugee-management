import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';


class SecondPage extends React.Component{
    render(){
        return(
            <div className="container cartoonpage h-100">
                <div className="row d-flex align-items-center h-100">
                    <div className="col-lg-12 col-sm-12 mx-5">
                        <Link to='/refugeesecondpage/refugeesingin' className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Refugee</button>
                        </Link>
                        <Link to='/refugeesecondpage/physiciansignin' className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Physician</button>
                        </Link>
                        <Link to='/public' className='p-1'>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Public </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default SecondPage;