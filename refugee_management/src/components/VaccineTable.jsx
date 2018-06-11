import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './action/actionCreator.js';
class VaccineTable extends React.Component{
    constructor(props){
        super(props);
        this.state={"VaccineList":[]};
        this.props.dispatch(actionCreator.Vaccine()).then(()=>{
            this.setState({VaccineList:this.props.Vaccine})
        })
    }
    render(){
        return(
            <div className='row d-flex justify-content-center align-items-center p-5'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Asset</th>
                                <th scope="col">Type</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.VaccineList.map((item,i)=>{
                                return(<tr key={i}>
                                            <td>Vaccine</td>
                                            <td>{item.vaccinationType}</td>
                                            <td>{item.quantity}</td>
                                        </tr>)
                            })}
                        </tbody>
                    </table>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps){
    return({Vaccine:state.VaccineDetails})
}

export default connect(mapStateToProps)(VaccineTable);