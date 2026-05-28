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
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7974143991983!2d-78.49268579999999!3d-0.1854796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5a39e43cd75fd%3A0x8c4140fcdf6a0ce1!2sPSIQUIMED!5e0!3m2!1ses-419!2sec!4v1779983528198!5m2!1ses-419!2sec'
                width='100%'
                height='100%'
                allowFullScreen=''
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
