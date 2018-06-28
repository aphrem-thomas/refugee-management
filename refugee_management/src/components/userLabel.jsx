import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class UserLable extends React.Component{
  render() {
    
    return (
      <div>
        <div className="card bg-light mb-2 mt-2 userlabel" styles=" max-width: 18rem;">
          <div className="card-body">
          <div className="row">
            <div className="col-4 col-4">
              <img className="card-img-left img-responsive img-circle" width="100" height="100" src={this.props.state1.refugeeImage} alt="Card image cap"/>
            </div>
            <span className="col-8 col-8">
              <h5 className="card-title"><b>{this.props.cardtitle}</b></h5>
              <br/><b>Name: </b>{this.props.state1.firstName}
              <br/><b>DOB: </b>{this.props.state1.dob}
              <br/><b>Gender: </b>{this.props.state1.sex}
            </span>
          </div>
          <div className="row d-flex justify-content-end">
          </div>
        </div>
        </div>
      </div>
    );
    
  }
}
function mapStateToProps(state,ownProps){
  return({state1:state.RefugeeDetails})
}
export default connect(mapStateToProps)(UserLable);
