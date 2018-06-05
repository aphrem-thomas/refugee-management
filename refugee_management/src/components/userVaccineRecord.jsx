import React from 'react';
import Vaccinecardtick from './vaccinecardtick.jsx';
import Vaccinecardcross from './vaccinecardcross.jsx';
import { connect } from 'react-redux';

class UserVaccineRecord extends React.Component {
  // iterator() {
  //   let vacc = this.props.state1.vaccinerecord;
  //   vacc.map((item) => {
  //     return (<Vaccinecard vaccine={item.name} status={item.status} />)
  //   })
  // }
  render() {

    return (
      <div>
        <h2 className="mx-2">Vaccine Record</h2>
        <div className="scrollablediv">
          {
            this.props.state1.vaccinerecord.map((item)=>{
              if(item.status!=null)
                  return (<Vaccinecardtick vaccine={item.name} date={item.date} location={item.location} camp={item.camp} />)
              else
                  return(<Vaccinecardcross vaccine={item.name} date={item.date} location={item.location} camp={item.camp} />)
        })
      }
        </div>
      </div>

    );

  }
}
function mapStateToProps(state, ownProps) {
  return ({ state1: state.RefugeeDetails })
}
export default connect(mapStateToProps)(UserVaccineRecord);
