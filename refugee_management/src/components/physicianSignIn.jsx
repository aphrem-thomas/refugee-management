import React from 'react';
import Navbar from './Navbar.jsx'


class PhysicianSignIn extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
            <div className='row d-flex justify-content-center h-100'>
                <div className='col-lg-6 co-sm-12'>
                    <div  className="signwindow border border-primary">
                        <form className='p-5'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Physician Id</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Like: HG26KJDF"/>
                                <small id="emailHelp" className="form-text text-muted">Enter Id provided by refugee</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Like: LSKDFLDKL.SS"/>
                                <small id="emailHelp" className="form-text text-muted">Enter authentication id of the Physican</small>
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

export default PhysicianSignIn;