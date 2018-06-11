import React from 'react';
import Navbar from "./Navbar.jsx";
import {connect} from 'react-redux';
import * as actionCreator from './action/actionCreator.js';
import BloodTable from './BloodTable.jsx';
import MedicineTable from './MedicineTable.jsx';
import VaccineTable from './VaccineTable.jsx';
import SyringeTable from './SyringTable.jsx';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class Medicalpublic extends React.Component {

    constructor(props){
        super(props); 
        this.state={"BloodState":[],
        "MedicineState":[],"VaccineState":[],"SyringeState":[]}
    }
    bloodClick(e){
        e.preventDefault();
        this.props.dispatch(actionCreator.Blood()).then(()=>{this.props.history.push("/supplysecondpage/public")});
    }

    vaccineClick(e){
        e.preventDefault();
        this.props.dispatch(actionCreator.Vaccine()).then(()=>{this.props.history.push("/supplysecondpage/public/vaccine")});
    }

    medicineClick(e){
        e.preventDefault();
        this.props.dispatch(actionCreator.Medicine()).then(()=>{this.props.history.push("/supplysecondpage/public/medicine")});
    }

    syringeClick(e){
        e.preventDefault();
        this.props.dispatch(actionCreator.Syringe()).then(()=>{this.props.history.push("/supplysecondpage/public/syringe")});
    }
    render() {
        return (
            <div>
                
                <BrowserRouter>
                <Navbar title={"Medical Supply"} />
                <button className="btn btn-primary" onClick={this.bloodClick.bind(this)}>Blood</button>
                <button className="btn btn-primary" onClick={this.medicineClick.bind(this)}>Medicine</button>
                <button className="btn btn-primary" onClick={this.vaccineClick.bind(this)}>Vaccine</button>
                <button className="btn btn-primary" onClick={this.syringeClick.bind(this)}>Syringe</button>
               
                <Switch>
                <Route exact path='/supplysecondpage/public' component={BloodTable}/>
                <Route exact path='/supplysecondpage/public/medicine' component={MedicineTable}/>
                <Route exact path='/supplysecondpage/public/vaccine' component={VaccineTable}/>
                <Route exact path='/supplysecondpage/public/syringe' component={SyringeTable}/>
                </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return{
        Blood: state.BloodDetails,
        Vaccine: state.VaccineDetails,
        Medicine: state.MedicineDetails,
        Syringe: state.SyringeDetails
    }
}
export default connect(mapStateToProps)(Medicalpublic);