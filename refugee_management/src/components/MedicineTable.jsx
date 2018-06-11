import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './action/actionCreator.js';

class MedicineTable extends React.Component{
    constructor(props){
        super(props);
        
        this.state={"MedicineList":[]};
        this.props.dispatch(actionCreator.Medicine()).then(()=>{
            this.setState({MedicineList:this.props.Medicine})
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
                        {this.state.MedicineList.map((item,i)=>{
                                return(<tr key={i}>
                                            <td>Medicine</td>
                                            <td>{item.medicineName}</td>
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
    return({Medicine:state.MedicineDetails})
}

export default connect(mapStateToProps)(MedicineTable);