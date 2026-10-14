import { useState } from 'react';
import CPNavButton from '../buttons/CPNavButton';

export default function DashNavbar({ activePage }) {
  const [isOpen, setIsOpen] = useState(activePage);

  const menuList = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '/dashboard',
    },
    {
      name: 'Doctores',
      icon: 'medical_services',
      url: '/dashboard/doctors',
    },
    {
      name: 'Artículos',
      icon: 'article',
      url: '/dashboard/articles',
    },
    {
      name: 'Servicios',
      icon: 'medical_information',
      url: '/dashboard/services',
    },
  ];
  return (
    <>
      <nav className='hidden md:flex bg-white  h-screen w-64 border-r border-slate-200 flex-col py-6 fixed left-0 top-0 z-40'>
        <div className='px-6 mb-8 flex flex-col gap-2'>
          <span className='text-lg font-extrabold text-violet-950 font-headline-md'>Gestión</span>
          <span className='text-xs text-slate-500 uppercase tracking-wider'>Clinical Adminitración&nbsp; Portal</span>
        </div>

        <ul className='flex flex-col grow w-full'>
          {menuList.map((item, index) => (
            <CPNavButton
              key={index}
              name={item.name}
              icon={item.icon}
              url={item.url}
              active={isOpen === item.name}
              onClick={() => setIsOpen(item.name)}
            />
          ))}
        </ul>
        <div className='mt-auto w-full border-t border-slate-200 dark:border-slate-800 pt-4'>
          <a
            className='flex items-center gap-3 px-6 py-3 text-slate-600  hover:text-violet-800  hover:bg-slate-50  font-manrope text-sm duration-200 ease-in-out w-full transition-colors'
            href='#'
          >
            <span className='material-symbols-outlined'>logout</span>
            Logout
          </a>
        </div>
      </nav>
    </>
  );
}
