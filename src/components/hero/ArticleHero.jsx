export default function ArticleHero({ image, imageAlt, category, readingTime, title, author, role, avatar }) {
  return (
    <>
      <header className='relative w-full h-[614px] min-h-[400px] flex items-end pb-xl pt-32 overflow-hidden'>
        <img className='absolute inset-0 w-full h-full object-cover' data-alt={imageAlt} src={image} />
        <div className='absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/40 to-transparent'></div>
        <div className='max-w-[1200px] mx-auto px-6 w-full relative z-10'>
          <div className='max-w-3xl backdrop-blur-md bg-white/10 p-lg rounded-xl border border-white/20 shadow-[0_30px_30px_rgba(57,20,148,0.12)]'>
            <div className='flex items-center gap-4 mb-4'>
              <span className='font-label-caps label-caps text-tertiary-fixed bg-tertiary-container/30 px-3 py-1 rounded-full backdrop-blur-sm'>
                {category}
              </span>
              <span className='flex items-center gap-1 font-label-caps label-caps text-inverse-primary'>
                <span className='material-symbols-outlined text-[16px]' data-icon='schedule' data-weight='fill'>
                  schedule
                </span>
                {readingTime}
              </span>
            </div>
            <h1 className='font-headline-xl text-headline-xl text-white mb-6'>{title}</h1>
            <div className='flex items-center gap-3'>
              <img
                className='w-12 h-12 rounded-full object-cover border-2 border-secondary-fixed-dim'
                data-alt='Professional headshot of a friendly female psychiatrist in her 40s wearing a white coat, natural light'
                src={avatar}
              />
              <div>
                <p className='font-body-md text-body-md text-white font-semibold'>{author}</p>
                <p className='font-label-caps label-caps text-inverse-primary'>{role}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
