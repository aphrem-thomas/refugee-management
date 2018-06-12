import React from 'react';
import mui from 'material-ui';
import AlarmIcon from 'react-material-icons/icons/action/alarm';

class Vaccinecard extends React.Component {

  render() {
    // let vacc=this.props.vaccine.split("#");
    return (
      <div className="card mb-2 mx-2">
        <div className="card-header text-white bg-success">
          {this.props.vaccine}<span><i className="material-icons tickicon">done</i></span>
        </div>
        <div className="card-body col-8">
          <h5 className="card-title"><b>Date:</b>{this.props.date}</h5>
          <p className="card-text">
            <b>Location: </b>{this.props.location}
            <br /><b>Camp: </b>{this.props.camp}
          </p>

        </div>
      </div>

    );

  }
}

export default Vaccinecard;
