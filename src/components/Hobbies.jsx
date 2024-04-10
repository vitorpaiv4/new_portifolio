import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRunning, faMusic, faFilm, faUtensils, faHeadphones} from '@fortawesome/free-solid-svg-icons';

function Hobbies() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8 ">Hobbies</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col items-center p-7  shadow-lg gap-4">
          <span>Programar</span>
          <FontAwesomeIcon icon={faCode}
          className='text-orange-500 h-8'/>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg gap-4">
          <span>Correr</span>
          <FontAwesomeIcon icon={faRunning}
          className='text-blue-500 h-8'/>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg gap-4">
          <span>Tocar Sax</span>
          <FontAwesomeIcon icon={faMusic}
          className='text-yellow-500 h-8'/>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg gap-4">
          <span>Assistir Filmes</span>
          <FontAwesomeIcon icon={faFilm}
          className='text-blue-500 h-8'/>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg gap-4">
          <span>Ouvir Música</span>
          <FontAwesomeIcon icon={faHeadphones}
          className='text-black-500 h-8'/>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg gap-4">
          <span>Cozinhar</span>
          <FontAwesomeIcon icon={faUtensils}
          className='text-green-500 h-8'/>
        </div>
        
      </div>
    </div>
  );
}

export default Hobbies;
