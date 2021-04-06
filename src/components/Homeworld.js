import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Homeworld = ( props ) => {

  const [ home, setHome ] = useState();

  useEffect( () => {
    let homeURL = props;
    let homeData;
    async function fetchData () {
      homeData = await axios.get( `${homeURL.homeData}` );
      setHome( homeData.data );
    }
    fetchData();
  }, [] );

  return (
    <div>
      {
        home ?
          <div key={Math.floor(Math.random() * 1000) + 1}>
            <h2>Homeworld: {home.name}</h2>
            <p>Population: {home.population}</p>
            <p>Climate: {home.climate}</p>
            <p>Terrain: {home.terrain}</p>
            <p>Surface Water: {home.surface_water}</p>
            <p>Gravity: {home.gravity}</p>
            <p>Diameter: {home.diameter}</p>
            <p>Orbital Period: {home.orbital_period}</p>
          </div> :
          <div>
            Homeworld: Loading...
          </div>
      }
    </div>
  )
}

export default Homeworld;