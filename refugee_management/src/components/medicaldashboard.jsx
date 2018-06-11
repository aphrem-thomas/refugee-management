import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SignIn from './vendorSignIn.jsx';
import RefugeeHome from './refugeeHome.jsx';
import { connect } from 'react-redux';
import * as actionCreator from './action/actionCreator.js';

class Medicaldashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "sublist": [
                { "item": null, "quantity": null },
            ], "itemquantity": null
        }
    }

    addItem(e) {
        e.preventDefault();
        let data = {
            transactionName: null,
            assetId: null,
            rep: null,
            quantity: null
        }

        let value = document.getElementById("quantity").value;
        data.assetId = document.getElementById("selectsub").value;
        data.rep = this.props.Vendor.repId;
        data.quantity = value;
        switch (document.getElementById("selectasset").value) {
            case 'Blood': {
                data.transactionName = "SupplyBlood";
                this.props.dispatch(actionCreator.addAsset(data)).then(()=>{
                    alert("sucessfully updated.");
                })
            }; break;
            case 'Medicine': {
                data.transactionName = "SupplyMedicine";
                this.props.dispatch(actionCreator.addAsset(data)).then(()=>{
                    alert("sucessfully updated.");
                })
            }; break;
            case 'Vaccine': {
                data.transactionName = "SupplyVaccine";
                this.props.dispatch(actionCreator.addAsset(data)).then(()=>{
                    alert("sucessfully updated.");
                })
            }; break;
            case 'Syringe': {
                data.transactionName = "SupplySyringe";
                this.props.dispatch(actionCreator.addAsset(data)).then(()=>{
                    alert("sucessfully updated.");
                })
            }; break;

        }
    }

    subItem(e) {
        e.preventDefault();
        let data = {
            "transactionName": null,
            "assetId": null,
            "rep": null,
            "quantity": null
        }

        let value = document.getElementById("quantity").value *-1;
        data.assetId = document.getElementById("selectsub").value;
        data.rep = this.props.Vendor.repId;
        data.quantity = value;
        switch (document.getElementById("selectasset").value) {
            case 'Blood': {
                data.transactionName = "SupplyBlood";
                this.props.dispatch(actionCreator.addAsset(data)).then(()=>{
                    alert("sucessfully updated.");
                })
            }; break;
            case 'Meidicine': {
                data.transactionName = "SupplyMedicine";
                this.props.dispatch(actionCreator.addAsset(data)).then(()=>{
                    alert("sucessfully updated.");
                })
            }; break;
            case 'Vaccine': {
                data.transactionName = "SupplyVaccine";
                this.props.dispatch(actionCreator.addAsset(data)).then(()=>{
                    alert("sucessfully updated.");
                })
            }; break;
            case 'Syringe': {
                data.transactionName = "SupplySyringe";
                this.props.dispatch(actionCreator.addAsset(data)).then(()=>{
                    alert("sucessfully updated.");
                })
            }; break;

        }
}
    

    onChange(e) {
        e.preventDefault();
        let opt = document.getElementById("selectasset").value;
        if (opt == "Blood") {
            this.props.dispatch(actionCreator.Blood()).then(() => {

                let temp = [];

                this.props.Blood.map((item) => {
                    let thing = { "item": null, "quantity": null };
                    thing.item = item.bloodType;
                    thing.quantity = item.quantity;
                    temp.push(thing);
                })
                console.log(temp);
                this.setState({ sublist: temp });
            })

        }
        if (opt == "Medicine") {
            this.props.dispatch(actionCreator.Medicine()).then(() => {
                let temp = [];
                this.props.Medicine.map((item) => {
                    let thing = { "item": null, "quantity": null };
                    thing.item = item.medicineName;
                    thing.quantity = item.quantity;
                    temp.push(thing);
                })
                this.setState({ sublist: temp });
            })


        }
        if (opt == "Vaccine") {
            this.props.dispatch(actionCreator.Vaccine()).then(() => {
                let temp = [];
                this.props.Vaccine.map((item) => {
                    let thing = { "item": null, "quantity": null };
                    thing.item = item.vaccinationType;
                    thing.quantity = item.quantity;
                    temp.push(thing);
                })
                this.setState({ sublist: temp });
            })


        }
        if (opt == "Syringe") {
            this.props.dispatch(actionCreator.Syringe()).then(() => {
                let temp = [];
                this.props.Syringe.map((item) => {
                    let thing = { "item": null, "quantity": null };
                    thing.item = item.syringeType;
                    thing.quantity = item.quantity;
                    temp.push(thing);
                })
                this.setState({ sublist: temp });
            })


        }
    }

    onChangeSub(e) {
        e.preventDefault();
        let value = document.getElementById("selectasset").value;
        let subvalue = document.getElementById("selectsub").value;
        if (value == "Blood") {

        }
    }
    render() {
        return (
            <div>
                <div className="card text-white bg-primary-frontpage mb-3">
                    <div className="card-body">
                        <h1 className="card-title">{this.props.Vendor.firstName}</h1>
                        <p className="card-text">You can add the detail using + button and remove using - button</p>
                    </div>

                </div>
                <div className='h-100 d-flex align-items-center p-3'>
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <h3>Select the item</h3>
                                <select className="form-control form-control-lg" onChange={this.onChange.bind(this)} id="selectasset">
                                    <option>Select</option>
                                    <option>Syringe</option>
                                    <option>Blood</option>
                                    <option>Vaccine</option>
                                    <option>Medicine</option>

                                </select>

                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-8">
                                <select className="form-control form-control-lg" id="selectsub" onChange={this.onChangeSub.bind(this)}>
                                    {this.state.sublist.map((list, i) => {
                                        console.log(list.quantity);
                                        return (<option key={i}>{list.item}</option>)
                                    })
                                    }
                                </select>
                            </div>
                            <div className="col-4">
                                <span class="badge badge-secondary"></span>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-6">
                                <input type="text" className="form-control h-100" id="quantity" placeholder="enter quantity" />
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-sm" onClick={this.addItem.bind(this)}><span><i className="material-icons addbutton">add_circle</i></span></button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light btn-sm" onClick={this.subItem.bind(this)}><span><i className="material-icons subbutton">remove_circle</i></span></button>
                            </div>
                        </div>

                    </form>

                </div>
                <div className="p-3">
                    <button className="btn btn-outline-info float-right">
                        <Link to="/supplysecondpage/vendorlogin/">Logout</Link>
                    </button>
                </div>
            </div>


        );
    }
}

function mapStateToProps(state, ownProps) {
    return ({
        Vendor: state.VendorDetails,
        Blood: state.BloodDetails,
        Vaccine: state.VaccineDetails,
        Medicine: state.MedicineDetails,
        Syringe: state.SyringeDetails
    })
}

export default connect(mapStateToProps)(Medicaldashboard);