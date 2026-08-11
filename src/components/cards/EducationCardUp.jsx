import { NavLink } from 'react-router-dom';

export default function EducationCardUp({ id, src, lectureTime, title, body, slug }) {
  return (
    <>
      <article
        key={id}
        className='bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient-1 hover:shadow-ambient-2 transition-shadow duration-300 flex flex-col'
      >
        <div className='aspect-[16/9] relative overflow-hidden'>
          <img
            alt='Manejo de ansiedad'
            className='w-full h-full object-cover'
            data-alt='Person sitting peacefully by a window looking out at nature, soft natural lighting, evoking calm and mindfulness'
            src={src}
          />
        </div>
        <div className='p-md flex-grow flex flex-col'>
          <div className='flex items-center gap-xs mb-sm text-secondary'>
            <span className='material-symbols-outlined !text-[18px]'>schedule</span>
            <span className='font-label-caps label-caps'>{lectureTime} min lectura</span>
          </div>
          <h3 className='font-headline-md text-headline-md text-on-surface mb-sm'>{title}</h3>
          <p className='font-body-md text-body-md text-on-surface-variant mb-md flex-grow'>{body}</p>
          <NavLink
            className='inline-flex items-center gap-xs text-primary font-medium hover:text-on-primary-fixed-variant transition-colors mt-auto'
            to={`/articulo/${slug}`}
            rel='noopener noreferrer'
          >
            Leer más <span className='material-symbols-outlined text-[20px]'>arrow_forward</span>
          </NavLink>
        </div>
      </article>
    </>
  );
}
