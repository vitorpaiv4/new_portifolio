import React from 'react';
import { HomeIcon, SparklesIcon, UserIcon, ComputerDesktopIcon, AcademicCapIcon, BookOpenIcon, PhoneIcon, CommandLineIcon, Bars3Icon } from "@heroicons/react/24/outline";
import About from './components/About';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Formacion from './components/Formacion';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mx-auto  text-black min-h-screen py-8">
      <nav className="flex justify-between items-center pb-5  px-5">
        <div className="flex items-center hover:text-blue-700">
          <SparklesIcon className='h-7' />
          <h1 className="text-3xl ml-2">Vitor Paiva</h1>
        </div>
        <div className="hidden md:flex items-center gap-7 lg:flex text-2xl">
          <button onClick={() => scrollToSection('home')} className='flex gap-2 hover:text-blue-700'><HomeIcon className='h-7' />Menu</button>
          <button onClick={() => scrollToSection('about')} className='flex gap-2 hover:text-blue-700'><UserIcon className='h-7' />Sobre Mim</button>
          <button onClick={() => scrollToSection('skills')} className='flex gap-2 hover:text-blue-700'><ComputerDesktopIcon className='h-7' />Skills</button>
          <button onClick={() => scrollToSection('hobbies')} className='flex gap-2 hover:text-blue-700'><CommandLineIcon className='h-7' />Hobbies</button>
          <button onClick={() => scrollToSection('formacion')} className='flex gap-2 hover:text-blue-700'><AcademicCapIcon className='h-7' />Formação</button>
          <button onClick={() => scrollToSection('projects')} className='flex gap-2 hover:text-blue-700'><BookOpenIcon className='h-7' />Projeto</button>
          <button onClick={() => scrollToSection('contact')} className='flex gap-2 hover:text-blue-700'><PhoneIcon className='h-7' />Contato</button>
        </div>
        <div className="flex md:hidden items-center gap-5 lg:hidden ">
        <button onClick={() => scrollToSection('home')} className='flex gap-2 hover:text-blue-700'><Bars3Icon className='h-5' /></button>
        </div>
      </nav>

      <main className='flex flex-col gap-20 text-2xl'>
        <div id="home"></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="hobbies"><Hobbies /></div>
        <div id="formacion"><Formacion /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </main>

    </div>
  );
}

export default App;
