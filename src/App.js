import React from 'react';
import { HomeIcon, SparklesIcon, UserIcon, ComputerDesktopIcon, AcademicCapIcon, BookOpenIcon, PhoneIcon } from "@heroicons/react/24/outline";
import About from './components/About';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mx-auto bg-slate-50 text-black min-h-screen py-8">
      <nav className="flex justify-between items-center pb-5 shadow-2xl px-5">
        <div className="flex items-center">
          <SparklesIcon className='h-6'/>
          <h1 className="text-2xl ml-2">Vitor Paiva</h1>
        </div>
        <div className="flex items-center gap-5">
          <button onClick={() => scrollToSection('home')} className='flex gap-2 hover:text-gray-300'><HomeIcon className='h-5'/>Menu</button>
          <button onClick={() => scrollToSection('about')} className='flex gap-2 hover:text-gray-300'><UserIcon className='h-5'/>Sobre Mim</button>
          <button onClick={() => scrollToSection('skills')} className='flex gap-2 hover:text-gray-300'><ComputerDesktopIcon className='h-5'/>Skills</button>
          <button onClick={() => scrollToSection('hobbies')} className='flex gap-2 hover:text-gray-300'><AcademicCapIcon className='h-5'/>Hobbies</button>
          <button onClick={() => scrollToSection('projects')} className='flex gap-2 hover:text-gray-300'><BookOpenIcon className='h-5'/>Projeto</button>
          <button onClick={() => scrollToSection('contact')} className='flex gap-2 hover:text-gray-300'><PhoneIcon className='h-5'/>Contato</button>
        </div>
      </nav>

      <div id="home"></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="hobbies"><Hobbies /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
