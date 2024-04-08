import React from 'react';
import profileImage from '../assets/img/eu.jpeg';
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function About() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-8 p-5">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Olá, meu nome é Vitor Paiva e construo páginas web</h1>
          <p className="mt-4">Eu sou formado em lorem ipsum sit amet consectetur e atualmente estou participando no projeto Oracle ONE na Alura.</p>
          <div className="mt-8 flex justify-center">
            <a href="https://github.com/vitorpaiv4" className="flex mr-4 hover:underline" target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRightIcon className='h-5 ml-1' /></a>
            <a href="https://www.linkedin.com/in/vitor-paiva-programador/" className="flex mr-4 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRightIcon className='h-5 ml-1' /></a>
            <a href="https://www.instagram.com/" className="flex mr-4 hover:underline" target="_blank" rel="noopener noreferrer">Instagram<ArrowUpRightIcon className='h-5 ml-1' /></a>
            <a href="/curriculo.pdf" className="flex mr-4 hover:underline" target="_blank" rel="noopener noreferrer">Currículo<ArrowUpRightIcon className='h-5 ml-1' /></a>
          </div>
        </div>
        <div className="flex-1">
          <img src={profileImage} alt="Vitor Paiva" className="w-64 h-64 object-cover rounded-full mx-auto md:mx-0" />
        </div>
      </div>
    </div>
  );
}

export default About;
