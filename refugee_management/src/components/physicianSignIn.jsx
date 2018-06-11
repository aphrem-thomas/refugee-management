import React from 'react';
import Navbar from './Navbar.jsx';
import * as actionCreator from './action/actionCreator.js';
import { connect } from 'react-redux';

class PhysicianSignIn extends React.Component {
    handleclick(e) {
        e.preventDefault();
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = yyyy + '/' + mm + '/' + dd;
        let doc = {
            "name": document.getElementById("phyid").value,
            "location": document.getElementById("sel1").value,
            "camp": document.getElementById("sel2").value,
            "date":today.toString()
        }
        // console.log(document.getElementById("doc"));
        let pid=document.getElementById("phyid").value;
        let ppwd=document.getElementById("phypwd").value;
        if (ppwd == '1234'&& (pid=="Dr_Venkata.Mamidanna"||pid=="Dr_Ambuj.Sinha"||pid=="Dr_Vyshak.Iyengar"||pid=="Dr_Aphrem.Thomas")) {
            this.props.dispatch(actionCreator.fetch(document.getElementById("refid").value)).then(() => {
                this.props.history.push("/refugeesecondpage/physiciansignin/user");
                //console.log(doc);
                this.props.dispatch(actionCreator.updateDoctor(doc));
            });
        }
        else{
            alert("enter correct credentials");
        }
    }
    render() {

        return (
            <div>
                <Navbar title="RMS" />
                <div className='row d-flex justify-content-center h-100'>
                    <div className='col-lg-6 co-sm-12'>
                        <div>
                            <form className='p-5'>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Physician Id</label>
                                    <input type="text" className="form-control" id="phyid" aria-describedby="emailHelp" placeholder="Like: HG26KJDF" />
                                    <small id="emailHelp" className="form-text text-muted">Enter Id of physician </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="phypwd" placeholder="Like: LSKDFLDKL.SS" />
                                    <small id="emailHelp" className="form-text text-muted">Enter password of physican</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword2">Refugee Id</label>
                                    <input type="text" className="form-control" id="refid" placeholder="Like: LSKDFLDKL.SS" />
                                    <small id="emailHelp" className="form-text text-muted">Enter Id of Refugee</small>
                                </div>
                                <div className='row'>
                                    <div className="form-group col-6">
                                        <label for="sel1">Country</label>
                                        <select className="form-control" id="sel1">
                                            <option>Syria</option>
                                            <option>Turkey</option>
                                            <option>Egypt</option>
                                            <option>Germany</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-6">
                                        <label for="sel1">Camp</label>
                                        <select className="form-control" id="sel2">
                                            <option>Aleppo:A</option>
                                            <option>Demascus:B</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="button" onClick={this.handleclick.bind(this)} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

}

export default connect(mapStateToProps)(PhysicianSignIn);