import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './action/actionCreator.js';
class SyringeTable extends React.Component{
    constructor(props){
        super(props);
        this.state={"SyringeList":[]};
        this.props.dispatch(actionCreator.Syringe()).then(()=>{
            this.setState({SyringeList:this.props.Syringe})
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
                        {this.state.SyringeList.map((item,i)=>{
                                return(<tr key={i}>
                                            <td>Syringe</td>
                                            <td>{item.syringeType}</td>
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
    return({Syringe:state.SyringeDetails})
}

export default connect(mapStateToProps)(SyringeTable);