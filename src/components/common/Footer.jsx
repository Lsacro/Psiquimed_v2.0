import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className='bg-slate-50  w-full py-12 border-t border-slate-200  text-[#391494]  font-manrope text-sm leading-relaxed'>
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8'>
          <div className='flex flex-col gap-sm'>
            <div className='text-xl font-black text-[#391494]  mb-xs'>Psiquimed</div>
            <p className='text-slate-500 '>© 2026 Psiquimed.&nbsp;Calma guiada para el bienestar mental</p>
            <div className='flex gap-6 mt-4'>
              <NavLink
                className='text-[#391494]  hover:scale-110  transition-colors'
                to='https://www.instagram.com/psiquimedec/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg className='w-10 h-10'>
                  <use href='/sprite.svg#instagram' />
                </svg>
              </NavLink>
              <NavLink
                className='text-[#391494]  hover:scale-110  transition-colors'
                to='https://www.tiktok.com/@tiktok'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg className='w-10 h-10'>
                  <use href='/sprite.svg#tiktok' />
                </svg>
              </NavLink>
              <NavLink
                className='text-[#391494]  hover:scale-110  transition-colors'
                to='https://www.facebook.com/psiquimed/?locale=es_LA'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg className='w-10 h-10'>
                  <use href='/sprite.svg#facebook' />
                </svg>
              </NavLink>
            </div>
          </div>
          <div className='flex flex-col gap-sm'>
            <h4 className='font-headline-md text-headline-md text-[#391494] '>Enlaces</h4>
            <a className='text-slate-500  hover:text-[#D2A0DF]  transition-colors outline-none focus:ring-2 focus:ring-purple-200' href='#'>
              Horarios de atención
            </a>
            <a className='text-slate-500  hover:text-[#D2A0DF]  transition-colors outline-none focus:ring-2 focus:ring-purple-200' href='#'>
              Google Maps
            </a>
            <a className='text-slate-500  hover:text-[#D2A0DF]  transition-colors outline-none focus:ring-2 focus:ring-purple-200' href='#'>
              WhatsApp&nbsp;
            </a>
            <a className='text-slate-500  hover:text-[#D2A0DF]  transition-colors outline-none focus:ring-2 focus:ring-purple-200' href='#'>
              Políticas de privacidad
            </a>
          </div>
          <div className='flex flex-col gap-sm col-span-1 md:col-span-2'>
            <h4 className='font-headline-md text-headline-md text-[#391494] '>Ubicación</h4>
            <div className='w-full h-48 bg-surface-variant rounded-xl flex items-center justify-center overflow-hidden border border-outline-variant/30'>
              <img
                alt='Map placeholder showing city streets'
                className='w-full h-full object-cover opacity-50 grayscale'
                data-alt='Stylized map showing a minimal elegant street view with a subtle pin drop'
                data-location='Ciudad de México'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuCIDU6ik5RikERAtdo0X1OBvDIVscwtW_EyfpgQJVbZxwttdFv5OVepcL2YWw3bXWG9oN7HT-gc7a3X2PK9fYzhNEI5GNMvQnFf8nDxPfLp-_67Nc0tHFUA2ZozP41Sb8KvF0PYat9Qij4pj4lhbMqQ5SH-bVVJ5xDb03X1IhJ2leF6tJ4bYmHxjB611xnm3WdjMw_SnXVwRLAG_XsdSqnN8XQuCoY23s8xXY1OrHHuetPaYGPdxhUn6ikwHZDubC47S52vsrjjm5w'
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
