import { HeaderLogo } from '@/components/ui/header/header-logo';
import { Navbar } from '@/components/ui/navbar/navbar';
import { TopBar } from '@/components/ui/topbar/top-bar';

export function HomePage() {
  return (
    <div className='bg-slate-600 w-screen'>
      <TopBar />
      <HeaderLogo />
      <Navbar />
    </div>
  );
}
