import React from 'react';
import Navbar from './Navbar.jsx'


class PhysicianSignIn extends React.Component{
    handleclick(){
        this.props.history.push("/refugeesecondpage/physiciansignin/user");
    }
    render(){
       
        return(
            <div>
                <Navbar title="RMS"/>
            <div className='row d-flex justify-content-center h-100'>
                <div className='col-lg-6 co-sm-12'>
                    <div>
                        <form className='p-5'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Physician Id</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Like: HG26KJDF"/>
                                <small id="emailHelp" className="form-text text-muted">Enter Id of physician </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Like: LSKDFLDKL.SS"/>
                                <small id="emailHelp" className="form-text text-muted">Enter password of physican</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Refugee Id</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Like: LSKDFLDKL.SS"/>
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
                            <select className="form-control" id="sel1">
                                <option>Aleppo:A</option>
                                <option>Demascus:B</option>
                            </select>
                            </div>
                            </div>
                            <button type="submit" onClick={this.handleclick.bind(this)} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default PhysicianSignIn;