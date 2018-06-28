import React from 'react';


class ChildCard extends React.Component{
    render(){
        return(
            <div className="card mx-2">
            <div className="row">
            <div className="col-3">
            <img className="card-img-left img-responsive img-circle" width="100" height="100" src={this.props.image} alt="Card image cap"/>
            </div>
            <div className="col-6">
            <div className="card-body mt-0">
              <h5 className="card-title">{this.props.name}</h5>
              <p className="card-text">{this.props.dob}</p>
            </div>
            </div>
            <span className="col-3 align-items-center">
            <button onClick={this.onClick2.bind(this)} className="btn btn-primary btn-lg babybuttton ">></button>
            </span>
            </div>
          </div>
        );
    }
}

export default ChildCard;