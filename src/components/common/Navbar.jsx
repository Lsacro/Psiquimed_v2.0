import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='bg-white/95 95 backdrop-blur-md w-full top-0 z-50 sticky border-b border-slate-100  shadow-[0_2px_15px_-3px_rgba(57,20,148,0.07)] font-manrope antialiased text-primary-container hidden md:block'>
        <div className='flex justify-between items-center h-20 px-8 max-w-300 mx-auto'>
          <div className='text-2xl font-bold tracking-tight text-primary-container '>Psiquimed</div>
          <div className='hidden md:flex items-center gap-sm'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `px-3 py-2 transition-all rounded-lg ${
                  isActive
                    ? 'text-primary-container border-b-2 border-primary-container font-bold'
                    : 'text-slate-600 hover:text-primary-container hover:bg-slate'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/professionals'
              className={({ isActive }) =>
                `px-3 py-2 transition-all rounded-lg ${
                  isActive
                    ? 'text-primary-container border-b-2 border-primary-container font-bold'
                    : 'text-slate-600 hover:text-primary-container hover:bg-slate'
                }`
              }
            >
              Profesionales
            </NavLink>
            <NavLink
              to='/services'
              className={({ isActive }) =>
                `px-3 py-2 transition-all rounded-lg ${
                  isActive
                    ? 'text-primary-container border-b-2 border-primary-container font-bold'
                    : 'text-slate-600 hover:text-primary-container hover:bg-slate'
                }`
              }
            >
              Servicios
            </NavLink>
            <NavLink
              to='/education'
              className={({ isActive }) =>
                `px-3 py-2 transition-all rounded-lg ${
                  isActive
                    ? 'text-primary-container border-b-2 border-primary-container font-bold'
                    : 'text-slate-600 hover:text-primary-container hover:bg-slate'
                }`
              }
            >
              Educación
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                `px-3 py-2 transition-all rounded-lg ${
                  isActive
                    ? 'text-primary-container border-b-2 border-primary-container font-bold'
                    : 'text-slate-600 hover:text-primary-container hover:bg-slate'
                }`
              }
            >
              Contacto
            </NavLink>
          </div>
          <div className='flex items-center'>
            <NavLink
              to='https://wa.me/593998964126'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-primary text-on-primary px-6 py-2 rounded-lg font-label-caps label-caps hover:bg-surface-tint active:scale-95 duration-150 ease-in-out cursor-pointer'
            >
              Agenda una cita
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
