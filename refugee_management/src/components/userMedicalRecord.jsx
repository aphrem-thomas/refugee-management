import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from './action/actionCreator.js';

class UserMedicalRecord extends React.Component {
    constructor(props){
        super(props);
        this.state={"btnstate":false}
    }
    onClick(){
        this.setState({btnstate:true})
        this.props.dispatch(actionCreator.fetch(this.props.state1.refugeeId)).then(()=>{
            this.setState({btnstate:false});
        })
    }
    moveBack(e){
        this.props.history.push("/refugeesecondpage/refugeesingin/user");
    }
    render() {

        return (
            <div>
                <div>
                <button className="btn btn-light col-3" onClick={this.moveBack.bind(this)}><span><i className="material-icons backbtn">arrow_back</i></span></button>
                <div className="float-right mx-3"><a href="/refugeesecondpage/refugeesingin">Logout</a></div>
                </div>
                <h2>Medical Record</h2>
                <div className="scrollablediv">
                    <div className="p-2">
                        <table class="table">

                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Hospital</th>
                                    <th scope="col">Medical Issue</th>
                                    <th scope="col">Physician</th>
                                    <th scope="col">Admited</th>
                                    <th scope="col">Released</th>
                                    <th scope="col">Prescription</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.state1.medicalRecords.map((item,i) => {
                                    let doc = item.physician.split('#');
                                    return (
                                        <tr key={i}>
                                            <td>{item.date}</td>
                                            <td>{item.hospital}</td>
                                            <td>{item.issue}</td>
                                            <td>{doc[1]}</td>
                                            <td>{item.admitDate}</td>
                                            <td>{item.dischargeDate}</td>
                                            <td>{item.prescription}</td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <button disabled={this.state.btnstate} className="btn btn-primary mx-3" onClick={this.onClick.bind(this)}>Refresh</button> */}
            </div>

        );

    }

    componentDidMount(){
        this.intervalvariable=setInterval(()=>{
            this.props.dispatch(actionCreator.fetch(this.props.state1.refugeeId))
    },5000)
}
    componentWillUnmount(){
        clearInterval(this.intervalvariable);
    }

}

function mapStateToProps(state, ownProps) {
    return ({ state1: state.RefugeeDetails });
}

export default connect(mapStateToProps)(UserMedicalRecord);
