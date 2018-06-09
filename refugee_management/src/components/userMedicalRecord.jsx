import React from 'react';
import { connect } from 'react-redux';


class UserMedicalRecord extends React.Component {
    render() {

        return (
            <div>
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
                                {this.props.state1.medicalRecords.map((item) => {
                                    let doc = item.physician.split('#');
                                    return (
                                        <tr>
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
            </div>

        );

    }
}

function mapStateToProps(state, ownProps) {
    return ({ state1: state.RefugeeDetails });
}

export default connect(mapStateToProps)(UserMedicalRecord);
