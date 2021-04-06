// Write your Character component here
import React from 'react';

import Homeworld from './Homeworld';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';

const CHAR = 'character_';

const Character = ( props ) => {
  
  const { charData } = props;

  return (
    <div>
      {
        charData ?
          <div className={`${CHAR}container`}>
            <h2>{charData.name}</h2>
            <div className={`${CHAR}show`}>
              <p>DOB: {charData.birth_year}</p>
              <p>Height: {charData.height}</p>
              <p>Mass: {charData.mass}</p>
              <p>Hair Color: {charData.hair_color}</p>
              <p>Skin Color: {charData.skin_color}</p>
              <p>Gender: {charData.gender}</p>
              <div className={`${CHAR}film-container`}>
                <h2>Films: </h2>
                <div>
                  {
                    charData.films.map( film => {
                      return (
                        <p style={{listStyleType: 'none'}} key={Math.floor(Math.random() * 1000) + 1}>{film}</p>
                      )
                    })
                  }
                </div>
              </div>
              <div className={`${CHAR}homeworld-container`}>
                <Homeworld homeData={charData.homeworld} />
              </div>
              <div className={`${CHAR}species-container`}>
                <h2>Species: </h2>
                {charData.species.length > 0 ?
                  charData.species.map( species => {
                    return (
                      <Species speciesDataURL={species} key={Math.floor(Math.random() * 1000) + 1} />
                    )
                  })
                  :
                  <p>No Species Info Listed</p>
                }
              </div>
              <div className={`${CHAR}starship-container`}>
                <h2>Starship(s): </h2>
                {charData.starships.length > 0 ?
                  charData.starships.map( starship => {
                    return (
                      <Starships starshipData={starship} key={Math.floor(Math.random() * 1000) + 1} />
                    )
                  }) :
                  <p>No Starship Info Listed</p>
                }
              </div>
              <div className={`${CHAR}vehicles-container`}>
                <h2>Vehicles: </h2>
                {charData.vehicles.length > 0 ?
                  charData.vehicles.map( vehicle => {
                    return (
                      <Vehicles vehiclesDataURL={vehicle} key={Math.floor(Math.random() * 1000) + 1} />
                    )
                  }) :
                  <p>No Vehicles Info Listed</p>
                }
              </div>
            </div>
          </div> :
          <div>
            <p>Character Data Loading...</p>
          </div>
      }
    </div>
  )
}

export default Character;