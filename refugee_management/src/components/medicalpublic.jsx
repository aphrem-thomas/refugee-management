import React from 'react';
import Navbar from "./Navbar.jsx";
import {connect} from 'react-redux';
import * as actionCreator from './action/actionCreator.js';

class Medicalpublic extends React.Component {

    constructor(props){
        super(props); 
        this.state={"BloodState":[],
        "MedicineState":[],"VaccineState":[],"SyringeState":[]}
    }
    onChange(e){
        e.preventDefault();
        let opt=document.getElementById("selectasset1").value;
        switch(opt){
            case 'Blood':{this.props.dispatch(actionCreator.Blood()).then(this.setState({BloodState:this.props.Blood}))};break;
            case 'Medicine':{this.props.dispatch(actionCreator.Medicine()).then(this.setState({MedicineState:this.props.Medicine}))};break;
            case 'Vaccine':{this.props.dispatch(actionCreator.Vaccine()).then(this.setState({VaccineState:this.props.Vaccine}))};break;
            case 'Syringe':{this.props.dispatch(actionCreator.Syringe()).then(this.setState({SyringeState:this.props.Syringe}))};break;
        }
        console.log(this.state.BloodState);
    }
    render() {
        return (
            <div>
                <Navbar title={"Medical Supply"} />
                <h3>Select the item</h3>
                                <select className="form-control form-control-lg" onChange={this.onChange.bind(this)} id="selectasset1">
                                    <option>Select</option>
                                    <option>Syringe</option>
                                    <option>Blood</option>
                                    <option>Vaccine</option>
                                    <option>Medicine</option>

                                </select>
                <div className="scrollablediv">
                <div className='row d-flex justify-content-center align-items-center h-100 p-5'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Asset</th>
                                <th scope="col">Type</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.BloodState.map((item,i)=>{
                                console.log(item);
                                return(<tr key={i}>
                                            <td>Blood</td>
                                            <td>{item.bloodType}</td>
                                            <td>{item.quantity}</td>
                                        </tr>)
                            })}
                            </tbody>
                            </table>
                            <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Asset</th>
                                <th scope="col">Type</th>
                                <th scope="col">Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.MedicineState.map((item,i)=>{
                                return(<tr key={i}>
                                            <td>Medicine</td>
                                            <td>{item.medicineName}</td>
                                            <td>{item.quantity}</td>
                                        </tr>)
                            })}
                            </tbody>
                            </table>
                            <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Asset</th>
                                <th scope="col">Type</th>
                                <th scope="col">Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.VaccineState.map((item,i)=>{
                                return(<tr key={i}>
                                            <td>Vaccine</td>
                                            <td>{item.vaccinationType}</td>
                                            <td>{item.quantity}</td>
                                        </tr>)
                            })}
                            </tbody>
                            </table>
                            <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Asset</th>
                                <th scope="col">Type</th>
                                <th scope="col">Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.SyringeState.map((item,i)=>{
                                return(<tr key={i}>
                                            <td>Syringe</td>
                                            <td>{item.syringeType}</td>
                                            <td>{item.quantity}</td>
                                        </tr>)
                            })}
                        </tbody>
                        </table>
                </div>
                </div>
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