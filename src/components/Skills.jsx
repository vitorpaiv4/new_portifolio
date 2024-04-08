import React from 'react';


function Skills() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-8 ">Skills</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>HTML5</span>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>CSS</span>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>JavaScript</span>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>React</span>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>TypeScript</span>
        </div>
        <div className="flex flex-col items-center p-7 shadow-lg">
          <span>Tailwind</span>
        </div>
        
      </div>
    </div>
  );
}

export default Skills;
