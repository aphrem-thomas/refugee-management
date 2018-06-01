import React from 'react';
import Vaccinecarddoctor from './vaccinecarddoctor.jsx';

class PhysicianVaccineRecord extends React.Component{
  render() {
    
    return (
      <div>
        <h2 className="mx-2">Vaccine Record</h2>
        <div className="scrollablediv">
          <Vaccinecarddoctor/>
        </div>
      </div>

    );
    
  }
}

export default PhysicianVaccineRecord;
