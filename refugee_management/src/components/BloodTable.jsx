import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './action/actionCreator.js';

class BloodTable extends React.Component{
    constructor(props){
        super(props);
        this.state={"BloodList":[]};
        this.props.dispatch(actionCreator.Blood()).then(()=>{
            this.setState({BloodList:this.props.Blood})
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
                        {this.state.BloodList.map((item,i)=>{
                                return(<tr key={i}>
                                            <td>Blood</td>
                                            <td>{item.bloodType}</td>
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
    return({Blood:state.BloodDetails})
}

export default connect(mapStateToProps)(BloodTable);