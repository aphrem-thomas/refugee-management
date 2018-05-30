import React from 'react';
import Navbar from './Navbar';


class RefugeeSignIn extends React.Component{
    render(){
        return(
            <div className="RefugeeSignIn h-100">
                <Navbar/>
                <div className="prescription"></div>
            <div className='row d-flex justify-content-center h-100 '>
                <div className='col-lg-6 col-sm-6 h-100'>
                    <div  className='h-100'>
                        <form className='signinform p-5'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Refugee Id</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Like: HG26KJDF"/>
                                <small id="emailHelp" className="form-text text-muted">Enter Id provided to the refugee</small>
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

export default RefugeeSignIn;