import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
// import $ from 'jquery';
import * as actionCreator from './action/actionCreator.js';
import {connect} from 'react-redux';
class RefugeeSignIn extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(e){
        e.preventDefault();
        this.refs.submitbtn.setAttribute("disabled","disabled");
        this.props.dispatch(actionCreator.fetch(document.getElementById("exampleInputEmail1").value)).then(()=>{
            this.props.history.push("/refugeesecondpage/refugeesingin/user");
        });
    }
    moveBack(e){
        this.props.history.push("/refugeesecondpage");
    }
    render(){
        return(
            <div className="RefugeeSignIn h-100">
            <button className="btn btn-light mt-2 mx-2" onClick={this.moveBack.bind(this)}><span><i className="material-icons backbtn">arrow_back</i></span></button>
                <Navbar title="RMS"/>
                <div className="prescription d-flex justify-content-center"></div>
            <div className='row d-flex justify-content-center h-100 '>
                <div className='col-lg-6 col-sm-6 h-100'>
                    <div  className='h-100'>
                        <form className='signinform p-5'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Refugee Id</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Like: HG26KJDF"/>
                                <small id="emailHelp" className="form-text text-muted">Enter Id provided to the refugee</small>
                            </div>
                            
                            <button ref="submitbtn" type="submit" onClick={this.handleClick.bind(this)} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps){

}
export default connect(mapStateToProps)(RefugeeSignIn);