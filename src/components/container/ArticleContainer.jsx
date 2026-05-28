import { NavLink } from 'react-router-dom';

export default function ArticleContainer({ intro, body, tips, cta }) {
  return (
    <>
      <div className='max-w-[1200px] mx-auto px-6 py-xl flex flex-col lg:flex-row gap-xl relative'>
        <article className='flex-grow lg:w-2/3 max-w-3xl'>
          <p className='font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed'>{intro}</p>
          <h2 className='font-headline-lg text-headline-lg text-primary-container mt-12 mb-6'>{body.header1.title}</h2>
          <p className='font-body-md text-body-md text-on-surface mb-6'>{body.header1.content}</p>
          <div className='bg-surface-container-low p-md rounded-xl border border-surface-variant my-8 shadow-[0_2px_10px_rgba(57,20,148,0.05)] flex gap-4 items-start'>
            <span className='material-symbols-outlined text-secondary text-3xl shrink-0' data-icon='psychology'>
              psychology
            </span>
            <div>
              <h3 className='font-headline-md text-headline-md text-on-surface mb-2'>{body.header2.title}</h3>
              <p className='font-body-md text-body-md text-on-surface-variant'>{body.header2.content}</p>
            </div>
          </div>
          <h2 className='font-headline-lg text-headline-lg text-primary-container mt-12 mb-6'>{body.header3.title}</h2>
          <p className='font-body-md text-body-md text-on-surface mb-6'>{body.header3.content}</p>
          <ul className='space-y-4 mb-8'>
            <li className='flex items-start gap-3'>
              <span
                className='material-symbols-outlined text-secondary-container bg-tertiary-container rounded-full p-1 mt-1'
                data-icon='check'
                data-weight='fill'
              >
                check
              </span>
              <div>
                <strong className='font-headline-md text-[18px] text-on-background block mb-1'>{tips.tip1.title}</strong>
                <span className='font-body-md text-body-md text-on-surface-variant'>{tips.tip1.description}</span>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <span
                className='material-symbols-outlined text-secondary-container bg-tertiary-container rounded-full p-1 mt-1'
                data-icon='check'
                data-weight='fill'
              >
                check
              </span>
              <div>
                <strong className='font-headline-md text-[18px] text-on-background block mb-1'>{tips.tip2.title}</strong>
                <span className='font-body-md text-body-md text-on-surface-variant'>{tips.tip2.description}</span>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <span
                className='material-symbols-outlined text-secondary-container bg-tertiary-container rounded-full p-1 mt-1'
                data-icon='check'
                data-weight='fill'
              >
                check
              </span>
              <div>
                <strong className='font-headline-md text-[18px] text-on-background block mb-1'>{tips.tip3.title}</strong>
                <span className='font-body-md text-body-md text-on-surface-variant'>{tips.tip3.description}</span>
              </div>
            </li>
          </ul>
        </article>

        <aside className='lg:w-1/3 mt-12 lg:mt-0'>
          <div className='sticky top-32'>
            <div className='bg-primary-container p-lg rounded-xl shadow-[0_10px_30px_rgba(57,20,148,0.12)] relative overflow-hidden'>
              <div className='absolute -top-12 -right-12 w-48 h-48 bg-tertiary-container rounded-full blur-3xl opacity-50'></div>
              <div className='relative z-10 text-center'>
                <span className='material-symbols-outlined text-secondary-fixed text-5xl mb-4' data-icon='vital_signs' data-weight='fill'>
                  vital_signs
                </span>
                <h3 className='font-headline-lg text-headline-lg text-on-primary mb-4'>{cta.title}</h3>
                <p className='font-body-md text-body-md text-inverse-primary mb-8'>{cta.description}</p>
                <NavLink
                  to='https://wa.me/593998964126'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full bg-secondary-container text-on-secondary-container font-headline-md text-[16px] py-3 px-6 rounded-lg hover:bg-secondary-fixed transition-colors shadow-sm'
                >
                  Reservar una consulta
                </NavLink>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
