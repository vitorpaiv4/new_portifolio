import React from 'react';
import profileImage from '../assets/img/eu.jpeg';

function About() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-8 p-5 ">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Olá, meu nome é Vitor Paiva e construo páginas web</h1>
          <p className="mt-4">Eu sou formado em lorem ipsum sit amet consectetur e atualmente estou participando no projeto Oracle ONE na Alura.</p>
        </div>
        <div className="flex-1">
          <img src={profileImage} alt="Vitor Paiva" className="w-64 h-64 object-cover rounded-full mx-auto md:mx-0" />
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Link to="/link1" className="mr-4 text-blue-500 hover:underline">Link 1</Link>
        <Link to="/link2" className="mr-4 text-blue-500 hover:underline">Link 2</Link>
        <Link to="/link3" className="mr-4 text-blue-500 hover:underline">Link 3</Link>
        <Link to="/link4" className="text-blue-500 hover:underline">Link 4</Link>
      </div>
    </div>
  );
}

export default About;
