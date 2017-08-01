import React, { Component } from 'react';
import VehiclesService from '../services/vehicles-service.js';
import VehicleCard from './vehicle-card.js'


export default class VehicleList extends Component {

  constructor() {
    super();

    this.state = {
      vehicles: []
    }

    this.vehiclesService = new VehiclesService();
  }

  componentDidMount() {
    let vehicles = this.vehiclesService.getVehicles();
    this.setState({ vehicles: vehicles.stockitems });
  }

  render() {
    return (
      <div>
        <header>
          <img src="https://assets.zuto.com/images/zuto-logo.svg" alt="Zuto logo"/>
        </header>

        {this.state.vehicles.map((vehicle, index) =>
          <VehicleCard vehicleDetails={vehicle} />
        )}
      </div>
    );
  }
}
