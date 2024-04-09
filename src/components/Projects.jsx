import React from 'react';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';

import imagemProjeto1 from '../assets/img/avaliadordefilme.png'
import imagemProjeto2 from '../assets/img/criptografor.png'
import imagemProjeto3 from '../assets/img/calculadora.png'
import imagemProjeto4 from '../assets/img/jogodavelha.png'
import imagemProjeto5 from '../assets/img/teladelogin.png'
import imagemProjeto6 from '../assets/img/loginnewletter.png'
import imagemProjeto7 from '../assets/img/listadecompra.png'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Projects() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 3, 
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const meusProjetos = [
    {
      titulo: 'Decodificador de texto',
      descricao: 'Challenge Alura Codificador',
      linkRepositorio: '#',
      linkDemo: '#',
      imagem: imagemProjeto2, 
    },
    {
      titulo: 'Avaliador de Filmes',
      descricao: 'FeedCine',
      linkRepositorio: '#',
      linkDemo: 'https://feedbookbox.vercel.app/',
      imagem: imagemProjeto1,
    },
    {
      titulo: 'Lista De Compras',
      descricao: '',
      linkRepositorio: '#',
      linkDemo: '#',
      imagem: imagemProjeto7, 
    },
    {
      titulo: 'Calculadora',
      descricao: '',
      linkRepositorio: '#',
      linkDemo: '#',
      imagem: imagemProjeto3, 
    },
    {
      titulo: 'Tela de Login Newletter',
      descricao: '',
      linkRepositorio: '#',
      linkDemo: '#https://formulario-newsletter-one.vercel.app/',
      imagem: imagemProjeto6, 
    },
    {
      titulo: 'Jogo Da Velha',
      descricao: '',
      linkRepositorio: '#',
      linkDemo: '#',
      imagem: imagemProjeto4, 
    },
    {
      titulo: 'Tela De Login',
      descricao: 'Challenge Alura Codificador',
      linkRepositorio: '#',
      linkDemo: '#',
      imagem: imagemProjeto5, 
    },
   
  ];

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-8">Experiência profissional</h1>
      <Slider {...settings}>
        {meusProjetos.map((projeto, indice) => (
          <div key={indice}>
            <ProjectCard {...projeto} />
          </div>
        ))}
      </Slider>
    </div>
  );
}


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next`}
      style={{ ...style, display: 'block' }} 
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev`}
      style={{ ...style, display: 'block' }} 
      onClick={onClick}
    />
  );
}

export default Projects;