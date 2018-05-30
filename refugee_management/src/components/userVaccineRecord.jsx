import React from 'react';
import Vaccinecard from './vaccinecard.jsx';

class UserVaccineRecord extends React.Component{
  render() {
    
    return (
      <div>
        <h2 className="mx-2">Vaccine Record</h2>
        <div className="scrollablediv">
          <Vaccinecard view="userview"/>
        </div>
      </div>

    );
    
  }
}

export default UserVaccineRecord;
