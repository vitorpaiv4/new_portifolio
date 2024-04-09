import React from 'react';
import logoimage from '../assets/img/bro.png';

function Contact() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between py-12">
       
        <div className="mb-8 md:mb-0 md:flex-1">
          <img src={logoimage} alt="Telefone antigo" className="max-w-lg mx-auto" />
        </div>
        

        <div className="flex-1 flex flex-col w-2">
          <h1 className="text-3xl font-bold mb-6 ">Contato</h1>
          <p className="mb-8">Quer entrar em contato comigo? Preencha o formulário ao lado e entrarei em contato o mais rápido possível.</p>
          <form className="space-y-6">
            <div className=' flex justify-center items-center'>
              <input type="text" placeholder="Nome" className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div>
              <input type="email" placeholder="E-mail" className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div>
              <input type="text" placeholder="Assunto" className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div>
              <textarea placeholder="Mensagem" className="w-full px-4 py-2 border border-gray-300 rounded" rows="4"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
