import React from 'react';
import { Route, Link } from 'react-router-dom';
import UserLabel from './userLabel.jsx';
import UserMedicalRecord from './userMedicalRecord.jsx';
// import SupplyChain from './components/supplyChainHome.jsx';

class RecordButton extends React.Component {
    moveBack(e) {
        this.props.history.push("/refugeesecondpage/refugeesingin/");
    }
    render() {

        return (
                <div className="container">
                <a href="/refugeesecondpage/physiciansignin"><button className="btn btn-light m-3 backbutton"><span><i className="material-icons backbtn">arrow_back</i></span></button></a>
                <div className="border rounded mx-2">
                    <div className="row ">
                        <div className="col-12"><h3 className="orangefont p-2">Personal EHR</h3></div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Link to='/refugeesecondpage/physiciansignin/user/usermedicalrecord/' className='p-1'>
                                <button type="button" className="btn btn-primary btn-lg btn-block ml-2">Medical Record</button>
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link to='/refugeesecondpage/physiciansignin/user/uservaccinerecord/' className='p-1'>
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
                        <div className="col-6 mb-2">
                            <Link to='/refugeesecondpage/refugeesingin/user/childrecord/' className='p-1'>
                                <button type="button" className="btn btn-primary btn-block btn-lg mx-2">Parents</button>
                            </Link>
                        </div>

                        <div className="col-6 mb-2">
                            <Link to='/refugeesecondpage/physiciansignin/user/childrecord/' className='p-1'>
                                <button type="button" className="btn btn-primary btn-block btn-lg ml-0">Children</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="float-right mx-3"><a href="/">Logout</a></div>
            </div>

    );

    }
}

export default RecordButton;


