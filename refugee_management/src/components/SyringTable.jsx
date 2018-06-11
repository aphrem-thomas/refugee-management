import React from 'react';
import {connect} from 'react-redux';

class SyringeTable extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='row d-flex justify-content-center align-items-center h-100 p-5'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Asset</th>
                                <th scope="col">Type</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.Syringe.map((item,i)=>{
                                console.log(item);
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