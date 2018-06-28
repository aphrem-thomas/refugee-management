import React from 'react';
import Vaccinecardtick from './vaccinecardtick.jsx';
import Vaccinecardcross from './vaccinecardcross.jsx';
import { connect } from 'react-redux';
import { difference } from 'lodash';
import * as actionCreator from './action/actionCreator.js';

class UserVaccineRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state={"vacc":"done"}

  }
  moveBack(e){
    if(this.props.location.pathname=="/refugeesecondpage/refugeesingin/user/childrecord/vaccinerecord/"){
      this.props.dispatch(actionCreator.fetch(this.props.Children[0].parentId)).then(()=>{
        this.props.history.push("/refugeesecondpage/refugeesingin/user");
      })
    }
      else{
        this.props.history.push("/refugeesecondpage/refugeesingin/user");
      }
    
    
}
done(e){
  e.preventDefault();
  this.setState({vacc:"done"})
}

notdone(e){
  e.preventDefault();
  this.setState({vacc:"notdone"})
}
  render() {
    var mandatoryVacc = [
      "DEPTERIA", "ROTAVIRUS", "MMR", "HPV", "TDAP", "MEASLES", "MUMPS", "HEPATITISA", "HEPATITISB", "POLIO"];
    var vaccinedone = [];
    var vaccinenot = [];
    this.props.state1.vaccinationRecords.map((item) => {
      vaccinedone.push(item.vaccineName);
    });
    vaccinenot = difference(mandatoryVacc, vaccinedone);
    return (
      <div>
        <div>
                <button className="btn btn-light col-3 backbutton" onClick={this.moveBack.bind(this)}><span><i className="material-icons backbtn">arrow_back</i></span></button>
                <div className="float-right mx-3"><a href="/refugeesecondpage/refugeesingin">Logout</a></div>
        </div>
        <h2 className="mx-2 orangefont">Vaccine Record</h2>
        <div className="row">
        <div className="col-6"><button onClick={this.done.bind(this)} type="button" className="btn btn-primary btn-lg  mt-0 mx-2">Done</button></div>
        <div className="col-6"><button onClick={this.notdone.bind(this)} type="button" className="btn btn-primary btn-lg  mt-0 ml-0 mr-2">Pending</button></div>
        {/* <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/childspage/' component={} />
        <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/medicalrecord/' component={UserMedicalRecord} />
        <Route exact path='/refugeesecondpage/refugeesingin/user/childrecord/vaccinerecord/' component={UserVaccineRecord} /> */}

        </div>
        <div className="scrollablediv">

          {
            this.state.vacc=="done"?this.props.state1.vaccinationRecords.map((item) => {
              return (<Vaccinecardtick vaccine={item.vaccineName} date={item.date} location={item.location} camp={item.camp}/>)
            }):vaccinenot.map((item) => {
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
  return ({ state1: state.RefugeeDetails,
            Children:state.Child
  })
}
export default connect(mapStateToProps)(UserVaccineRecord);
