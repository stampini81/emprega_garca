import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export function HeaderLogo() {
  return (
    <header className='w-screen bg-gray-100'>
      <div className='flex items-center justify-between px-6 py-3 ml-5 mr-5'>
        <Link to='/' className='flex items-center gap-3 w-96'>
          <img
            src='logo.png'
            alt='Secretaria de desenvolvimento econômico de Garça'
            className='h-20 w-16 object-contain'
          />
          <h1 className='text-md uppercase leading-tight'>
            Secretaria de desenvolvimento econômico de{' '}
            <span className='font-bold text-2xl block'>Garça</span>
          </h1>
        </Link>

        <div className='relative w-6/12'>
          <input
            type='text'
            placeholder='Pesquisar por vagas de emprego, notícias e outros'
            className='shadow-sm w-full rounded-xl border border-gray-300 pl-4 pr-12 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button className='w-12 h-7 flex items-center justify-center rounded-xl absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white hover:bg-blue-600 transition-colors'>
            <Search className='h-4 w-4' />
          </button>
        </div>
      </div>
    </header>
  );
}
