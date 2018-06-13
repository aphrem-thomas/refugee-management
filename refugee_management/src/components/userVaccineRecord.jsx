import React from 'react';
import Vaccinecardtick from './vaccinecardtick.jsx';
import Vaccinecardcross from './vaccinecardcross.jsx';
import { connect } from 'react-redux';
import { difference } from 'lodash';
import * as actionCreator from './action/actionCreator.js';

class UserVaccineRecord extends React.Component {
  constructor(props) {
    super(props);

  }
  moveBack(e){
    this.props.history.push("/refugeesecondpage/refugeesingin/user");
}

  render() {
    var mandatoryVacc = [
      "DEPTERIA", "ROTAVIRUS", "MMR", "HPV", "TDAP", "MEASLES", "MUMPS", "HEPATITISA", "HEPATITISB", "POLIO"];
    var vaccinedone = [];
    var vaccinenot = [];
    this.props.state1.vaccinationRecords.map((item) => {
      vaccinedone.push(item.vaccineName);
    });
    console.log("vaccine done"+vaccinedone);
    vaccinenot = difference(mandatoryVacc, vaccinedone);
    return (
      <div>
        <div>
                <button className="btn btn-light col-3" onClick={this.moveBack.bind(this)}><span><i className="material-icons backbtn">arrow_back</i></span></button>
                <div className="float-right mx-3"><a href="/refugeesecondpage/refugeesingin">Logout</a></div>
        </div>
        <h2 className="mx-2">Vaccine Record</h2>
        <div className="scrollablediv">

          {
            this.props.state1.vaccinationRecords.map((item) => {
              return (<Vaccinecardtick vaccine={item.vaccineName} date={item.date} location={item.location} camp={item.camp}/>)
            })
          }
          {
            vaccinenot.map((item) => {
              console.log("inside vaccinecross");
              return (<Vaccinecardcross vaccine={item} />)
            })
          }

        </div>
      </div>

    );

  }
  componentDidMount() {
    this.intervalvariable = setInterval(() => {
        this.props.dispatch(actionCreator.fetch(this.props.state1.refugeeId))
    }, 5000)
}
componentWillUnmount() {
    clearInterval(this.intervalvariable);
}
}


function mapStateToProps(state, ownProps) {
  return ({ state1: state.RefugeeDetails })
}
export default connect(mapStateToProps)(UserVaccineRecord);
