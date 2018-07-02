import React from 'react';
import { Route, Link } from 'react-router-dom';
import UserLabel from './userLabel.jsx';
import UserMedicalRecord from './userMedicalRecord.jsx';
import * as actionCreator from './action/actionCreator.js';
import { connect } from 'react-redux';
// import SupplyChain from './components/supplyChainHome.jsx';

class RecordButton extends React.Component {
    moveBack(e) {
        this.props.history.push("/refugeesecondpage/refugeesingin/");
    }

    dependentRecord(){          //to show dependents if any
        if(this.props.Ref.children)
        return(
            <div className="border rounded mx-2 mt-2">
            <div className="row">
                <div className="col-12"><h3 className="orangefont p-2">Dependent's EHR</h3></div>
            </div>
            <div className="row">
                <div className="col-6 mb-2">
                    <div className='p-1'>
                        <button type="button" className="btn btn-primary btn-block btn-lg mx-2" onClick={this.parentRecord.bind(this)}>Parents</button>
                    </div>
                </div>
                <div className="col-6 mb-2">
                    <div className='p-1'>
                        <button type="button" className="btn btn-primary btn-block btn-lg ml-0" onClick={this.childRecord.bind(this)}>Children</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }

    childRecord(e) {
        e.preventDefault();
       
        let arrayChildren = [];
        let children1 = this.props.Ref.children;
        this.props.dispatch(actionCreator.emptyChildren());
        if (children1) {
            children1.map((item) => {
                let child1 = item.child.split('#');
                arrayChildren.push(child1[1])
            })
        }
        arrayChildren.map((item) => {
                //otherwise everytime we go back and return to same screen child list will get populated
                this.props.dispatch(actionCreator.updateChildren(item, this.props.Ref.refugeeId))
            
        })
        this.props.history.push("/refugeesecondpage/physiciansignin/user/childrecord/");
    }

    parentRecord(e) {
        e.preventDefault();
        let arrayChildren = [];
        let parent=this.props.Ref.parents;
        this.props.dispatch(actionCreator.emptyChildren());
        if (parent) {
            let father = parent.father.split('#');
            let mother = parent.mother.split('#');
            arrayChildren=[father[1],mother[1]]
        }
        arrayChildren.map((item) => {
                  //otherwise everytime we go back and return to same screen child list will get populated
                this.props.dispatch(actionCreator.updateChildren(item, this.props.Ref.refugeeId))
           
        })
        this.props.history.push("/refugeesecondpage/physiciansignin/user/parentrecord/");
    }

    render() {

        return (
            <div className="container">
                <a href="/refugeesecondpage/physiciansignin"><button className="btn btn-light m-3 backbutton"><span><i className="material-icons backbtn">arrow_back</i></span></button></a>
                <div className="border rounded mx-2">
                    <div className="row ">
                        <div className="col-12"><h3 className="orangefont p-2">Personal EHR</h3></div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Link to='/refugeesecondpage/physiciansignin/user/medicalrecord/' className='p-1'>
                                <button type="button" className="btn btn-primary btn-lg btn-block ml-2">Medical Record</button>
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link to='/refugeesecondpage/physiciansignin/user/vaccinerecord/' className='p-1'>
                                <button type="button" className="btn btn-primary btn-lg btn-block ml-0">Vaccine Record</button>
                            </Link>
                        </div>
                    </div>
                </div>
               {this.dependentRecord()}
                <div className="float-right mx-3"><a href="/">Logout</a></div>
            </div>

        );

    }
}

function mapStateToProps(state, ownProps) {
    return ({
        Ref: state.RefugeeDetails,
        Children: state.Child
    })
}

export default connect(mapStateToProps)(RecordButton);


