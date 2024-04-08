import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AcademicCapIcon, SparklesIcon, HomeIcon, UserIcon, PhoneIcon, ComputerDesktopIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import About from './components/About';



const Skills = () => <div>Skills</div>;
const Hobbies = () => <div>Hobbies</div>;
const Projects = () => <div>Projeto</div>;
const Contact = () => <div>Contatos</div>;

function App() {
  return (
    <Router>
      <div className="mx-auto bg-slate-50 text-black min-h-screen py-8">
        <div className="flex flex-col gap-5">
          <nav className="flex justify-between items-center pb-5 shadow-2xl px-5">
            <div className="flex items-center">
              <SparklesIcon className='h-6'/>
              <h1 className="text-2xl ml-2">Vitor Paiva</h1>
            </div>
            <div className="flex items-center gap-5">
              <Link to="/about" className='flex gap-2 hover:text-gray-300'><UserIcon className='h-5'/>Sobre Mim</Link>
              <Link to="/skills" className='flex gap-2 hover:text-gray-300'><ComputerDesktopIcon className='h-5'/>Skills</Link>
              <Link to="/hobbies" className='flex gap-2 hover:text-gray-300'><AcademicCapIcon className='h-5'/>Hobbies</Link>
              <Link to="/projects" className='flex gap-2 hover:text-gray-300'><BookOpenIcon className='h-5'/>Projeto</Link>
              <Link to="/contact" className='flex gap-2 hover:text-gray-300'><PhoneIcon className='h-5'/>Contato</Link>
            </div>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
