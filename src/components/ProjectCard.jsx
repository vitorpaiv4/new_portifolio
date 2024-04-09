import React from 'react';

const ProjectCard = ({ titulo, descricao, linkRepositorio, linkDemo, imagem }) => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-64 object-cover" src={imagem} alt={`Imagem do projeto ${titulo}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{titulo}</div>
        <p className="text-gray-700 text-base">
          {descricao}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        <a href={linkRepositorio} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Repositório</a>
        <a href={linkDemo} className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mb-2">Ver demo</a>
      </div>
    </div>
  );
};

export default ProjectCard;

