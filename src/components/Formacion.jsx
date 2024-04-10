import React from 'react';
import logoimage from '../assets/img/logo-unisapiens.png';

function Formacion() {
return (
<div className='text-center'>
<h1 className="text-4xl font-bold mb-6">Formação Acadêmica</h1>
<div className='flex flex-wrap justify-center gap-4'>
<div className="flex flex-col items-center p-4 shadow-lg">
          <img src={logoimage} alt="" className="mb-2" /> 
          <span className='font-bold'>Bacharel em Sistemas de Informação</span>
          <span> Em andamento - Faculdade Unisapiens</span>

</div>
</div>
</div>
);
}

export default Formacion;