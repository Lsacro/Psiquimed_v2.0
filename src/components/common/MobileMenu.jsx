import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      {/* HEADER SOLO MÓVIL */}
      <header className='fixed top-0 left-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm lg:hidde items-center'>
        <button onClick={() => setIsOpen(true)}>
          <span className='material-symbols-outlined text-[28px]'>menu</span>
        </button>
        <div className='text-2xl font-bold tracking-tight text-primary-container '>Psiquimed</div>
        <NavLink
          to='https://wa.me/593998964126'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-primary text-on-primary px-6 py-2 rounded-lg font-label-caps label-caps hover:bg-surface-tint active:scale-95 duration-150 ease-in-out cursor-pointer'
        >
          Agenda una cita
        </NavLink>
      </header>

      {/* OVERLAY */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      />

      {/* DRAWER */}
      <aside
        className={`fixed top-0 left-0 z-[60] flex h-screen w-[78%] max-w-[320px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* HEADER DRAWER */}
        <div className='flex items-center justify-between border-b px-6 py-6'>
          <h2 className='text-3xl font-bold text-[#391494]'>Psiquimed</h2>

          <button onClick={closeMenu}>
            <span className='material-symbols-outlined text-[28px]'>close</span>
          </button>
        </div>

        {/* MENÚ */}
        <nav className='flex-1 px-4 py-6'>
          <ul className='space-y-2'>
            <li>
              <Link to='/' onClick={closeMenu} className='flex items-center gap-4 rounded-xl  px-4 py-4 font-semibold'>
                <span
                  className='material-symbols-outlined'
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  home
                </span>

                <span>Inicio</span>
              </Link>
            </li>

            <li>
              <Link
                to='/professionals'
                onClick={closeMenu}
                className='flex items-center gap-4 rounded-xl px-4 py-4 text-slate-600 hover:bg-slate-100'
              >
                <span className='material-symbols-outlined'>psychology</span>

                <span>Profesionales</span>
              </Link>
            </li>

            <li>
              <Link to='/services' onClick={closeMenu} className='flex items-center gap-4 rounded-xl px-4 py-4 text-slate-600 hover:bg-slate-100'>
                <span className='material-symbols-outlined'>medical_services</span>

                <span>Servicios</span>
              </Link>
            </li>
            <li>
              <Link to='/education' onClick={closeMenu} className='flex items-center gap-4 rounded-xl px-4 py-4 text-slate-600 hover:bg-slate-100'>
                <span className='material-symbols-outlined'>menu_book</span>

                <span>Psico-Educación</span>
              </Link>
            </li>

            <li>
              <Link to='/contact' onClick={closeMenu} className='flex items-center gap-4 rounded-xl px-4 py-4 text-slate-600 hover:bg-slate-100'>
                <span className='material-symbols-outlined'>mail</span>

                <span>Contacto</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* BOTÓN INFERIOR */}
        <div className='p-4'>
          <button className='flex w-full items-center justify-center gap-2 rounded-xl bg-[#391494] py-4 font-semibold text-white'>
            <span className='material-symbols-outlined'>event_available</span>

            <NavLink to='https://wa.me/593998964126' target='_blank' rel='noopener noreferrer'>
              Reservar una cita
            </NavLink>
          </button>
        </div>
      </aside>
    </div>
  );
}
