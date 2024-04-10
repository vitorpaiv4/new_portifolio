import React, { useState } from 'react';
import logoimage from '../assets/img/bro.png';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

 
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch('http://localhost:3001/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await response.json();
      console.log(data);
      alert('Mensagem enviada com sucesso!'); 
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      alert('Falha ao enviar a mensagem, tente novamente.');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between py-12">
       
        <div className="mb-8 md:mb-0 md:flex-1">
          <img src={logoimage} alt="Logo" className="" />
        </div>
        

        <div className="flex-1 flex flex-col sm:w-full md:w-3/4 lg:w-1/2 xl:w-2/5">
          <h1 className="text-3xl font-bold mb-6">Contato</h1>
          <p className="mb-8">Quer entrar em contato comigo? Preencha o formulário ao lado e entrarei em contato o mais rápido possível.</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className='flex justify-center items-center'>
              <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div>
              <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div>
              <input type="text" placeholder="Assunto" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div>
              <textarea placeholder="Mensagem" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" rows="4"></textarea>
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
