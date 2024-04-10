import React, { useState } from 'react';
import { HomeIcon, SparklesIcon, UserIcon, ComputerDesktopIcon, AcademicCapIcon, BookOpenIcon, PhoneIcon, CommandLineIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import About from './components/About';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Formacion from './components/Formacion';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [drawer, setDrawer] = useState(false)
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const handleChangeDrawer = () => {
    setDrawer(!drawer)
  }

  return (
    <div className="mx-auto bg-gray-100  text-black min-h-screen py-8 relative">
      {
        drawer &&
        <div className='h-full overflow-hidden w-screen fixed top-0 bg-black/30 backdrop-blur-lg flex '>
          <div className='w-[70%] bg-white relative'>
            <button onClick={handleChangeDrawer} className='right-2 top-2 absolute'>
              <XMarkIcon className='h-6 w-6 ' />
            </button>
            <div className='h-12'></div>
            <div className="  items-center gap-7 flex text-2xl flex-col px-5 ">
              <button onClick={() => scrollToSection('home')} className='py-1 border-b w-full flex gap-2 hover:text-blue-700'><HomeIcon className='h-7' />Menu</button>
              <button onClick={() => scrollToSection('about')} className='py-1 border-b w-full flex gap-2 hover:text-blue-700'><UserIcon className='h-7' />Sobre Mim</button>
              <button onClick={() => scrollToSection('skills')} className='py-1 border-b w-full flex gap-2 hover:text-blue-700'><ComputerDesktopIcon className='h-7' />Skills</button>
              <button onClick={() => scrollToSection('hobbies')} className='py-1 border-b w-full flex gap-2 hover:text-blue-700'><CommandLineIcon className='h-7' />Hobbies</button>
              <button onClick={() => scrollToSection('formacion')} className='py-1 border-b w-full flex gap-2 hover:text-blue-700'><AcademicCapIcon className='h-7' />Formação</button>
              <button onClick={() => scrollToSection('projects')} className='py-1 border-b w-full flex gap-2 hover:text-blue-700'><BookOpenIcon className='h-7' />Projeto</button>
              <button onClick={() => scrollToSection('contact')} className='py-1 border-b w-full flex gap-2 hover:text-blue-700'><PhoneIcon className='h-7' />Contato</button>
            </div>
          </div>
        </div>
      }
      <nav className="flex justify-between items-center pb-5  px-5">
        <div className="flex items-center hover:text-blue-700 ">
          <SparklesIcon className='h-7' />
          <h1 className="text-3xl ml-2">Vitor Paiva</h1>
        </div>
        <div className="hidden md:flex items-center gap-7 lg:flex text-2xl ">
          <button onClick={() => scrollToSection('home')} className='flex gap-2 hover:text-blue-700'><HomeIcon className='h-7' />Menu</button>
          <button onClick={() => scrollToSection('about')} className='flex gap-2 hover:text-blue-700'><UserIcon className='h-7' />Sobre Mim</button>
          <button onClick={() => scrollToSection('skills')} className='flex gap-2 hover:text-blue-700'><ComputerDesktopIcon className='h-7' />Skills</button>
          <button onClick={() => scrollToSection('hobbies')} className='flex gap-2 hover:text-blue-700'><CommandLineIcon className='h-7' />Hobbies</button>
          <button onClick={() => scrollToSection('formacion')} className='flex gap-2 hover:text-blue-700'><AcademicCapIcon className='h-7' />Formação</button>
          <button onClick={() => scrollToSection('projects')} className='flex gap-2 hover:text-blue-700'><BookOpenIcon className='h-7' />Projeto</button>
          <button onClick={() => scrollToSection('contact')} className='flex gap-2 hover:text-blue-700'><PhoneIcon className='h-7' />Contato</button>
        </div>
        <div className="flex md:hidden items-center gap-5 lg:hidden ">
          <button onClick={handleChangeDrawer} className='flex gap-2 hover:text-blue-700'><Bars3Icon className='h-5' /></button>
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
      <div className="w-full text-center py-4 bg-gray-100">
  
  <h1 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-1xl ml-2 cursor-pointer">Feito por Vitor Paiva</h1>
</div>
    </div>
  );
}

export default App;
