import React from 'react';
import Navbar from "./Navbar.jsx";
import {connect} from 'react-redux';
import * as actionCreator from './action/actionCreator.js'

class VendorSignIn extends React.Component{
    handleClick(e){
        e.preventDefault();
        
        let pid=document.getElementById("vendorid").value;;
        let ppwd=document.getElementById("vendorpassword").value;
        if (ppwd == '1234'&& (pid=="MR_Maria.Jones"||pid=="MR_Jonathan.Lyod")) {  
        this.props.dispatch(actionCreator.fetchVendor(document.getElementById("vendorid").value)).then(()=>{
            this.props.history.push("/supplysecondpage/vendorlogin/user");
        })}
        
        // if(document.getElementById("vendorid").value=="abcd" && document.getElementById("vendorpassword").value=="1234" )
        //     this.props.history.push("/supplysecondpage/vendorlogin/user");
    }
    moveBack(e){
        this.props.history.push("/supplysecondpage");
    }
    render(){
        return(
            <div>
                <Navbar title={"Medical Supply"}/>
                <button className="btn btn-light mx-3 mt-3" onClick={this.moveBack.bind(this)}><span><i className="material-icons backbtn">arrow_back</i></span></button>
            <div className='row d-flex justify-content-center align-items-center h-100'>
                <div className='col-lg-6 co-sm-12'>
                    <div>
                        <form className='p-5'>
                            <div className="form-group">
                                <label htmlFor="vendorid">Vendor Id</label>
                                <input type="text" className="form-control" id="vendorid" aria-describedby="emailHelp" placeholder="Like: HG26KJDF"/>
                                <small id="emailHelp" className="form-text text-muted">Enter Id provided for user</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="vendorpwd">Password</label>
                                <input type="password" className="form-control" id="vendorpassword" placeholder="Like: LSKDFLDKL.SS"/>
                                <small id="emailHelp" className="form-text text-muted">Enter password</small>
                            </div>
                           
                            <button type="submit" onClick={this.handleClick.bind(this)} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps){
    return{

    }
}
export default connect(mapStateToProps)(VendorSignIn);