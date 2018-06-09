import React from 'react';
import mui from 'material-ui';
import AlarmIcon from 'react-material-icons/icons/action/alarm';

class Vaccinecard extends React.Component {
  handleClick(e){
    e.preventDefault();
    
  }

  render() {

    return (
      <div className="card mb-2">
        <div className="card-header text-white bg-danger">
          {this.props.vaccine}<span><i className="material-icons tickicon">highlight_off</i></span>
        </div>
        <div className="card-body">
          <h5 className="card-title">Pending</h5>
            <p className="card-text">
            {
              this.props.doctor!=null?<button className='btn btn-primary' onClick={this.handleClick.bind(this)}>done</button>:null
            }
              
            </p>
          </div>
      </div>

    );

  }
}

export default Vaccinecard;
