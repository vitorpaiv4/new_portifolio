import React from 'react';
import profileImage from '../assets/img/eu.jpeg';
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function About() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center gap-8 p-5 w-full max-w-5xl mx-auto">
        <div className="flex-1 flex flex-col  w-full">
          <h1 className="text-2xl font-bold">Olá, meu nome é Vitor Paiva e construo páginas web</h1>
          <p className="mt-4">Eu sou formado em lorem ipsum sit amet consectetur e atualmente estou participando no projeto Oracle ONE na Alura.</p>
          <div className="mt-8 flex justify-center md:justify-start gap-5">
            <a href="https://github.com/vitorpaiv4" className="flex items-center mr-4 hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub<ArrowUpRightIcon className='h-4 ' />
            </a>
            <a href="https://www.linkedin.com/in/vitor-paiva-programador/" className="flex items-center mr-4 hover:underline" target="_blank" rel="noopener noreferrer">
              LinkedIn<ArrowUpRightIcon className='h-4 ' />
            </a>
            <a href="https://www.instagram.com/" className="flex items-center mr-4 hover:underline" target="_blank" rel="noopener noreferrer">
              Instagram<ArrowUpRightIcon className='h-4 ' />
            </a>
            <a href="/curriculo.pdf" className="flex items-center hover:underline" target="_blank" rel="noopener noreferrer">
              Currículo<ArrowUpRightIcon className='h-4 ' />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={profileImage} alt="Vitor Paiva" className="w-64 h-64 object-cover rounded-full mx-auto md:mx-0" />
        </div>
      </div>
      <div className="p-5 mt-8 bg-blue-100 w-full ">
        <div className='max-w-5xl mx-auto'>
          <h1 className="text-2xl font-bold">Sobre Mim</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit velit, volutpat semper dignissim dictum, imperdiet ut lacus,  </p>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit velit </p>
        </div>

      </div>
    </div>
  );
}

export default About;
