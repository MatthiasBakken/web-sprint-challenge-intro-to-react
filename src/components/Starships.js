import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Starships = ( props ) => {
  const [ starships, setStarships ] = useState();
  const { starshipData } = props;

  useEffect( () => {
    let starshipsData;
    async function fetchData () {
      starshipsData = await axios.get( `${starshipData}` );
      setStarships(starshipsData.data);
    }
    fetchData();
  }, [] )

  return (
    <div>
      {
        starships ?
          <div>
            <p>Name: {starships.name}</p>
            <p>Model: {starships.model}</p>
            <p>Manufacturer: {starships.manufacturer}</p>
            <p>MSRP: {starships.cost_in_credits}</p>
            <p>Length: {starships.length}</p>
            <p>Max Speed (Atmosphere): {starships.max_atmosphering_speed}</p>
            <p>Crew: {starships.crew}</p>
            <p>Passengers: {starships.passengers}</p>
            <p>Cargo Capacity: {starships.cargo_capacity}</p>
            <p>Consumables: {starships.consumables}</p>
            <p>Hyperdrive Rating: {starships.hyperdrive_rating}</p>
            <p>MGLT: {starships.MGLT}</p>
            <p>Starship Class: {starships.starship_class}</p>
          </div>
          :
          <div>
            Starship(s): Loading...
          </div>
      }
    </div>
  )
}

export default Starships;