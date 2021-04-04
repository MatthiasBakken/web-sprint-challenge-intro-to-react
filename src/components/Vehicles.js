import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Vehicles = ( props ) => {
  const [ vehicles, setVehicles ] = useState();
  const { vehiclesDataURL } = props;

  useEffect( () => {
    let vehiclesData;
    async function fetchData () {
      vehiclesData = await axios.get( `${vehiclesDataURL}` );
      setVehicles(vehiclesData.data);
    }
    fetchData();
  }, [] )

  return (
    <div>
      {
        vehicles ?
          <div>
            <p>Name: {vehicles.name}</p>
            <p>Model: {vehicles.model}</p>
            <p>Manufacturer: {vehicles.manufacturer}</p>
            <p>MSRP: {vehicles.cost_in_credits}</p>
            <p>Length: {vehicles.length}</p>
            <p>Max Speed (Atmosphere): {vehicles.max_atmosphering_speed}</p>
            <p>Crew: {vehicles.crew}</p>
            <p>Passengers: {vehicles.passengers}</p>
            <p>Cargo Capacity: {vehicles.cargo_capacity}</p>
            <p>Consumables: {vehicles.consumables}</p>
            <p>Class: {vehicles.vehicle_class}</p>
          </div>
          :
          <div>
            Vehicle(s): Loading...
          </div>
      }
    </div>
  )
}

export default Vehicles;