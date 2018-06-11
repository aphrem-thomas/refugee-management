import React from 'react';
import {connect} from 'react-redux';

class VaccineTable extends React.Component{
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
                        {this.props.Vaccine.map((item,i)=>{
                                console.log(item);
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