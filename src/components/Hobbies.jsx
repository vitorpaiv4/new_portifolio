import React from 'react';

function Hobbies() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-8 ">Hobbies</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col items-center p-7  shadow-lg gap-4">
          <span>Programar</span>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>Correr</span>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>Tocar Sax</span>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>Assistir Filmes</span>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>Ouvir Música</span>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>Cozinhar</span>
        </div>
        
      </div>
    </div>
  );
}

export default Hobbies;
