import React from 'react';
import mui from 'material-ui';
import AlarmIcon from 'react-material-icons/icons/action/alarm';

class Vaccinecard extends React.Component{

  render() {
    
    return (
        <div>
       <div className="card mb-2">
        <div className="card-header text-white bg-success">
          Polio<span><i className="material-icons tickicon">done</i></span>
        </div>
        <div className="card-body col-8">
          <h5 className="card-title"><b>Date:</b>1/19/2017</h5>
            <p className="card-text">
                <b>Location: </b>Syria
                <br/><b>Camp: </b>Demascus
            </p>
            
          </div>
        </div>

        <div className="card mb-2">
        <div className="card-header text-white bg-success">
        Diphtheria<span><i className="material-icons tickicon">done</i></span>
        </div>
        <div className="card-body">
          <h5 className="card-title"><b>Date:</b>2/9/2017</h5>
            <p className="card-text">
                <b>Location: </b>Syria
                <br/><b>Camp: </b>Aleppo
            </p>
          </div>
        </div>

        <div className="card mb-2">
        <div className="card-header text-white bg-success">
        Measles-Mumps-Rubella<span><i className="material-icons tickicon">done</i></span>
        </div>
        <div className="card-body">
          <h5 className="card-title"><b>Date:</b>1/19/2017</h5>
            <p className="card-text">
                <b>Location: </b>Greece
                <br/><b>Camp: </b>Corinth
            </p>
          </div>
        </div>

        <div className="card mb-2">
        <div className="card-header text-white bg-danger">
            Hepatitis B.<span><i className="material-icons tickicon">highlight_off</i></span>
        </div>
        <div className="card-body">
          <h5 className="card-title">Pending</h5>
            <p className="card-text">
               
            </p>
          </div>
        </div>
        </div>
    );
    
  }
}

export default Vaccinecard;
