import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import SignIn from './vendorSignIn.jsx';
import RefugeeHome from './refugeeHome.jsx';
class Medicaldashboard extends React.Component{
    render(){
        return(
            <div>
                <div className="card text-white bg-primary-frontpage mb-3">
                  <div className="card-body">
                      <h1 className="card-title">John</h1>
                      <p className="card-text">You can add the detail using + button and remove using - button</p>
                    </div>
                   
                  </div>
            <div className='h-100 d-flex align-items-center p-3'>
                
                <form>
                <div className="row">
                <div className="col-12">
                    <h3>Select the item</h3>
                    <select class="form-control form-control-lg">
                        <option>Syringe</option>
                        <option>Blood</option>
                        <option>Polio Vaccine</option>
                    </select>
                    
                </div>
                </div>
                <div className="row mt-3">
                <div className="col-6">
                    <input type="number" className="form-control h-100" id="quantity" placeholder="enter quantity"/>
                </div>
                <div className="col-3">
                    <button className="btn btn-light btn-sm"><span><i className="material-icons addbutton">add_circle</i></span></button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light btn-sm"><span><i className="material-icons subbutton">remove_circle</i></span></button>
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

export default Medicaldashboard;