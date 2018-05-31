import React from 'react';
import Navbar from "./Navbar.jsx";

class VendorSignIn extends React.Component{
    render(){
        return(
            <div>
                <Navbar title={"Medical Supply"}/>
            <div className='row d-flex justify-content-center align-items-center h-100'>
                <div className='col-lg-6 co-sm-12'>
                    <div>
                        <form className='p-5'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Vendor Id</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Like: HG26KJDF"/>
                                <small id="emailHelp" className="form-text text-muted">Enter Id provided for user</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Like: LSKDFLDKL.SS"/>
                                <small id="emailHelp" className="form-text text-muted">Enter password</small>
                            </div>
                           
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default VendorSignIn;