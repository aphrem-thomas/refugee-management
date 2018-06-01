import React from 'react';
import {Route, Link} from 'react-router-dom';
import UserLabel from './userLabel.jsx';
import UserMedicalRecord from './userMedicalRecord.jsx';
// import SupplyChain from './components/supplyChainHome.jsx';

class RecordButton extends React.Component{
  render() {
    
    return (
        <div className='h-100'>
        <div className="container h-100">
            <div className="mt-5">
                <div className="col-lg-12 col-sm-12">
                    <Link to='/refugeesecondpage/physiciansignin/user/usermedicalrecord/' className='p-1'>
                        <button type="button" className="btn btn-primary btn-lg btn-block">Medical Record</button>
                    </Link>
                    <Link to='/refugeesecondpage/physiciansignin/user/uservaccinerecord/' className='p-1'>
                        <button type="button" className="btn btn-primary btn-lg btn-block">Vaccine Record</button>
                    </Link>
                </div>
            </div>
        </div>
      </div>

    );
    
  }
}

export default RecordButton;


