import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className='w-screen bg-transparent p-4'>
      <div className='rounded-xl bg-white text-black h-12 flex items-center justify-center gap-6 px-6'>
        <Link to='/' className='rounded px-2 py-1 hover:bg-gray-100'>
          Início
        </Link>
        <Link to='/' className='rounded px-2 py-1 hover:bg-gray-100'>
          Vagas de Emprego
        </Link>
        <Link to='/' className='rounded px-2 py-1 hover:bg-gray-100'>
          Agendamento Online
        </Link>
        <Link to='/' className='rounded px-2 py-1 hover:bg-gray-100'>
          Protocolo
        </Link>
        <Link to='/' className='rounded px-2 py-1 hover:bg-gray-100'>
          Links Úteis
        </Link>
        <Link to='/' className='rounded px-2 py-1 hover:bg-gray-100'>
          Notícias
        </Link>
        <Link to='/' className='rounded px-2 py-1 hover:bg-gray-100'>
          Fale Conosco
        </Link>
        <Link to='/' className='rounded px-2 py-1 hover:bg-gray-100'>
          Sobre Nós
        </Link>
      </div>
    </nav>
  );
}
