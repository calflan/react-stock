import React, { Component } from 'react';

export default class VehicleCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <img className="vehicle-img" src={this.props.vehicleDetails.advert.imageUrls[0]} />
      </div>
    );
  }
}
