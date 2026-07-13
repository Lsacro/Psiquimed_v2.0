import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function ProfessionalCard({ doctor_name, title, specialty, treatment_1, treatment_2, treatment_3, img_url, linkedin }) {
  const [open, setOpen] = useState(false);

  const isTouchDevice = typeof window !== 'undefined' && (window.matchMedia('(hover: none)').matches || 'ontouchstart' in window);

  return (
    <div
      onClick={() => {
        if (isTouchDevice) setOpen(!open);
      }}
      className={`relative group overflow-hidden rounded-xl bg-surface aspect-[3/4] shadow-md shadow-primary-container/10 hover:shadow-2xl hover:shadow-primary-container/30 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer`}
    >
      <img
        className={`w-full h-full object-cover transition-transform duration-700 ${open ? 'scale-110' : 'group-hover:scale-110'}`}
        alt={doctor_name}
        src={img_url}
      />

      <div
        className={`absolute inset-0 bg-[#391494]/30 transition-opacity duration-500 ease-in-out z-10 ${
          open ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      ></div>

      <div
        className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 z-10 ${
          open
            ? 'from-black/80 via-black/40 to-transparent'
            : 'from-black/70 via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/40'
        }`}
      ></div>

      <div className='absolute inset-0 p-md flex flex-col justify-end z-20'>
        <div className={`transition-transform duration-500 ${open ? '-translate-y-4' : 'group-hover:-translate-y-4'}`}>
          <span className='label-caps text-label-caps text-tertiary-fixed-dim tracking-wider uppercase mb-2 block'>{specialty}</span>

          <h3 className='font-headline-md text-headline-md text-white'>{title}</h3>

          <h4 className='font-headline-sm text-headline-sm text-white'>{doctor_name}</h4>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out ${
            open ? 'grid grid-rows-[1fr] opacity-100' : 'grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100'
          }`}
        >
          <div className='overflow-hidden'>
            <div className='flex flex-wrap gap-2 mb-4'>
              <span className='bg-primary-container/60 text-white border border-white/20 label-caps text-[10px] px-2 py-1 rounded-full backdrop-blur-sm'>
                {treatment_1}
              </span>

              <span className='bg-primary-container/60 text-white border border-white/20 label-caps text-[10px] px-2 py-1 rounded-full backdrop-blur-sm'>
                {treatment_2}
              </span>

              <span className='bg-primary-container/60 text-white border border-white/20 label-caps text-[10px] px-2 py-1 rounded-full backdrop-blur-sm'>
                {treatment_3}
              </span>
            </div>

            <NavLink
              className='text-[#391494] hover:scale-110 transition-transform flex items-center justify-center'
              to={linkedin}
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => e.stopPropagation()}
            >
              <svg className='w-10 h-10'>
                <use href='/sprite.svg#linkedin' />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
