import React from 'react';
import {connect} from 'react-redux';

class UserLable extends React.Component{
  render() {
    
    return (
      <div>
        <div className="card bg-light mb-2 mt-2" styles="max-width: 18rem;">
          <div className="card-body">
          <div className="row">
            <div className="col-4 col-4">
              <img className="card-img-left img-responsive img-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="Card image cap"/>
            </div>
            <span className="col-8 col-8">
              <h5 className="card-title"><b>{this.props.cardtitle}</b></h5>
              <br/><b>Name: </b>{this.props.state1.firstName}
              <br/><b>DOB: </b>{this.props.state1.dob}
              <br/><b>Gender: </b>{this.props.state1.sex}
            </span>
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
