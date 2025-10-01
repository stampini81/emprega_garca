import { Facebook, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export function TopBar() {
  return (
    <div className='w-screen h-12 bg-blue-700 flex items-center justify-end px-6 gap-2'>
      <a
        href='https://wa.me/5511999999999'
        target='_blank'
        rel='noopener noreferrer'
        className='w-6 h-6 flex items-center justify-center rounded bg-gray-800 text-white hover:bg-green-600 transition-colors'
      >
        <FaWhatsapp className='h-4 w-4' />
      </a>

      <a
        href='https://facebook.com'
        target='_blank'
        rel='noopener noreferrer'
        className='w-6 h-6 flex items-center justify-center rounded bg-gray-800 text-white hover:bg-blue-700 transition-colors'
      >
        <Facebook className='h-4 w-4' />
      </a>

      <a
        href='https://instagram.com'
        target='_blank'
        rel='noopener noreferrer'
        className='w-6 h-6 flex items-center justify-center rounded bg-gray-800 text-white hover:bg-pink-600 transition-colors'
      >
        <Instagram className='h-4 w-4' />
      </a>
    </div>
  );
}
