import React from 'react';
import Vaccinecardtick from './vaccinecardtick.jsx';
import Vaccinecardcross from './vaccinecardcross.jsx';
import { connect } from 'react-redux';
import { difference } from 'lodash';

class PhysicianVaccineRecord extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    var mandatoryVacc = [
      "PNEUMOCOCCAL", "DEPTERIA", "ROTAVIRUS", "MMR", "HPV", "TDAP", "MEASLES", "MUMPS", "HEPATITISA", "HEPATITISB", "POLIO"];
    var vaccinedone = [];
    var vaccinenot = [];
    this.props.state1.vaccinationRecords.map((item) => {
      vaccinedone.push(item.vaccineName);
    });
    vaccinenot = difference(mandatoryVacc, vaccinedone);
    console.log(this.props.Doc);
    return (
      <div>
        <h2 className="mx-2">Vaccine Record</h2>
        <div className="scrollablediv">

          {
            this.props.state1.vaccinationRecords.map((item,i) => {
              return (<Vaccinecardtick key={i} vaccine={item.vaccineName} date={item.date} location={item.location} camp={item.camp}/>)
            })
          }
          {
            vaccinenot.map((item,i) => {
              return (<Vaccinecardcross key={i} 
                vaccine={item} 
                doctor={this.props.Doc.name} 
                location={this.props.Doc.location}
                camp={this.props.Doc.camp}
                date={this.props.Doc.date}
                />)
            })
          }

        </div>
      </div>

    );

  }
}
function mapStateToProps(state, ownProps) {
  return ({ state1: state.RefugeeDetails,
            Doc:state.DoctorDetails
  })
}
export default connect(mapStateToProps)(PhysicianVaccineRecord);
