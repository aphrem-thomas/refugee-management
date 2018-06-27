import React from 'react';
import Navbar from "./Navbar.jsx";
import { connect } from 'react-redux';
import * as actionCreator from './action/actionCreator.js';
import BloodTable from './BloodTable.jsx';
import MedicineTable from './MedicineTable.jsx';
import VaccineTable from './VaccineTable.jsx';
import SyringeTable from './SyringTable.jsx';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Medicalpublic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "BloodState": [],
            "MedicineState": [], "VaccineState": [], "SyringeState": []
        }
    }
    moveBack(e){
        this.props.history.push("/supplysecondpage");
    }
    
    render() {
        return (
            <BrowserRouter>
                <div>
                <button className="btn btn-light m-3 backbutton" onClick={this.moveBack.bind(this)}><span><i className="material-icons backbtn">arrow_back</i></span></button>
                    <Navbar title={"Medical Supply"} />
                    <div className="mt-2">
                    <button className="btn btn-outline-primary mx-1"><Link to='/supplysecondpage/public/'>Blood</Link></button>
                    <button className="btn btn-outline-primary mx-1"><Link to='/supplysecondpage/public/medicine'>Medicine</Link></button>
                    <button className="btn btn-outline-primary mx-1"><Link to='/supplysecondpage/public/syringe'>Syringe</Link></button>
                    <button className="btn btn-outline-primary mx-1"><Link to='/supplysecondpage/public/vaccine'>Vaccine</Link></button>
                    </div>
    
                    <div className="scrollablediv">
                        <Route exact path='/supplysecondpage/public' component={BloodTable} />
                        <Route exact path='/supplysecondpage/public/medicine' component={MedicineTable} />
                        <Route exact path='/supplysecondpage/public/vaccine' component={VaccineTable} />
                        <Route exact path='/supplysecondpage/public/syringe' component={SyringeTable} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        Blood: state.BloodDetails,
        Vaccine: state.VaccineDetails,
        Medicine: state.MedicineDetails,
        Syringe: state.SyringeDetails
    }
}
export default connect(mapStateToProps)(Medicalpublic);