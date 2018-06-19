import React from 'react';
import {Route, Link} from 'react-router-dom';
import UserLabel from './userLabel.jsx';
import UserMedicalRecord from './userMedicalRecord.jsx';
// import SupplyChain from './components/supplyChainHome.jsx';

class RecordButton extends React.Component{
    moveBack(e){
        this.props.history.push("/refugeesecondpage/refugeesingin/");
    }
  render() {
    
    return (
        <div className='h-100'>
        <a href="/refugeesecondpage/physiciansignin"><button className="btn btn-light m-3"><span><i className="material-icons backbtn">arrow_back</i></span></button></a>
        <div className="container h-100">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-lg-4 col-sm-12">
                    <Link to='/refugeesecondpage/physiciansignin/user/usermedicalrecord/' className='p-1'>
                        <button type="button" className="btn btn-primary btn-lg btn-block">Medical Record</button>
                    </Link>
                    <Link to='/refugeesecondpage/physiciansignin/user/uservaccinerecord/' className='p-1'>
                        <button type="button" className="btn btn-primary btn-lg btn-block">Vaccine Record</button>
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

