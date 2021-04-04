import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Species = ( props ) => {
  const [ species, setSpecies ] = useState();
  const { speciesDataURL } = props;

  useEffect( () => {
    let speciesData;
    async function fetchData () {
      speciesData = await axios.get( `${speciesDataURL}` );
      setSpecies(speciesData.data);
    }
    fetchData();
  }, [] )

  return (
    <div>
      {
        species ?
          <div>
            <p>Name: {species.name}</p>
            <p>Classification: {species.classification}</p>
            <p>Designation: {species.designation}</p>
            <p>Average Lifespan: {species.average_lifespan}</p>
            <p>Homeworld: {species.homeworld}</p>
            <p>Language: {species.language}</p>
            <p>Skin Colors: {species.skin_colors}</p>
            <p>Hair Colors: {species.hair_colors}</p>
            <p>Eye Colors: {species.eye_colors}</p>
          </div>
          :
          <div>
            Species: Loading...
          </div>
      }
    </div>
  )
}
export default Species;