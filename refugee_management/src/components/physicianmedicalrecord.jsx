import React from 'react';
import {connect}from 'react-redux';
import * as actionCreator from './action/actionCreator.js';


class PhysicianMedicalRecord extends React.Component {
    clickHandler(e){
        e.preventDefault();
      
        let data={
            "refugee":this.props.Ref.refugeeId,
            "doctor":this.props.Doc.name,
            "date": this.props.Doc.date,
            "hospital":document.getElementById("hospname").value,
            "issue": document.getElementById("issue").value,
            "admitDate":document.getElementById("admitdate").value,
            "dischargeDate":document.getElementById("releasedate").value,
            "treatment": "",
            "prescription":document.getElementById("presc").value
          
        }
        this.props.dispatch(actionCreator.updateMedicalRecord(this.props.Ref.refugeeId,data));
    }
    moveBack(e){
        if(this.props.location.pathname=="/refugeesecondpage/physiciansignin/user/childrecord/medicalrecord/"){
          this.props.dispatch(actionCreator.fetch(this.props.Children[0].parentId)).then(()=>{
            this.props.history.push("/refugeesecondpage/physiciansignin/user");
          })
        }
          else{
            this.props.history.push("/refugeesecondpage/physiciansignin/user");
          }
        }
        
    render() {

        return (
            <div>
                <div>
                    <button className="btn btn-light col-3 backbutton" onClick={this.moveBack.bind(this)}><span><i className="material-icons backbtn">arrow_back</i></span></button>
                    <div className="float-right mx-3"><a href="/refugeesecondpage/physiciansignin">Logout</a></div>
                </div>
                <h2 className="orangefont">Medical Record</h2>
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
                            {this.props.Ref.medicalRecords.map((item) => {
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

                <button type="button" className="btn btn-primary mx-2" data-toggle="modal" data-target="#exampleModal">
                    Add
                </button>


                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add medical record</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            <label>hospital name</label>
                                            <input type="text" className="form-control" id="hospname" placeholder="enter hospital name"/>                               
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <label>admit date</label>
                                            <input type="date" className="form-control" id="admitdate" placeholder="admit date"/>
                                        </div>
                                        <div className="col-6">
                                            <label>release date</label>
                                            <input type="date" className="form-control" id="releasedate" placeholder="release date"/>                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <label>Medical Issue</label>
                                            <input type="text" className="form-control" id="issue" placeholder="enter the medical issue"/>                               
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <label>Prescription</label>
                                            <input type="text" className="form-control" id="presc" placeholder="enter prescription"/>                               
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" onClick={this.clickHandler.bind(this)} data-dismiss="modal" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

function mapStateToProps(state,ownProps){
    return({Ref:state.RefugeeDetails, Doc:state.DoctorDetails})
}
export default connect(mapStateToProps)(PhysicianMedicalRecord);
