import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <div className='flex flex-col gap-3 items-center justify-center h-screen'>
        <h1 className='text-black text-2xl'>Página não encontrada</h1>
        <Link to='/' className='text-xl text-black'>
          Voltar para tela inicial
        </Link>
      </div>
    </>
  );
}
