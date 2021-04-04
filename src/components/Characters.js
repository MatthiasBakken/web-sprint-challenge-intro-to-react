import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { PEOPLE_API } from '../constants/constants';
import Character from './Character';

const Characters = () => {

  const [ people, setPeople ] = useState();

  useEffect( () => {
    let chars;
    async function fetchData () {
      chars = await axios.get( `${PEOPLE_API}` );
      setPeople( chars.data );
    }
    fetchData();
  }, [] );

  return (
    <div>
      {
        people ?
          <div className={`main-container`}>
            {people.map( char => {
              return (
                <div key={char.name}>
                  <Character charData={char} />
                </div>
              )
            })}
          </div> :
          <div>
            Loading...
          </div>
      }
    </div>
  );
}

export default Characters;