import React from 'react';
import {Route, Link} from 'react-router-dom';
import UserLabel from './userLabel.jsx';
import UserMedicalRecord from './userMedicalRecord.jsx';
// import SupplyChain from './components/supplyChainHome.jsx';

class UserPage extends React.Component{
  render() {
    
    return (
      <div>
        <UserLabel/>
        <UserMedicalRecord/>
      </div>

    );
    
  }
}

export default UserPage;
