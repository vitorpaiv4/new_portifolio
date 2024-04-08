import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs  } from '@fortawesome/free-brands-svg-icons';


function Skills() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-8 ">Skills</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>HTML5</span>
          <FontAwesomeIcon icon={faHtml5} 
            className='text-orange-500 h-8'/>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>CSS</span>
          <FontAwesomeIcon icon={faCss3Alt} 
            className='text-blue-500 h-8'/>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>JavaScript</span>
          <FontAwesomeIcon icon={faJsSquare} 
            className='text-yellow-500 h-8'/>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>React</span>
          <FontAwesomeIcon icon={faReact} 
            className='text-blue-500 h-8'/>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>TypeScript</span>
          <FontAwesomeIcon icon={faJsSquare} 
            className='text-oliver-500 h-8'/>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>Node JS</span>
          <FontAwesomeIcon icon={faNodeJs} 
          className='text-green-500 h-8'/>
        </div>
       
        
      </div>
    </div>
  );
}

export default Skills;
