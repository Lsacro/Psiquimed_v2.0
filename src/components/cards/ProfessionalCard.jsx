export default function ProfessionalCard({ name, title, specialty, specialties, src }) {
  return (
    <>
      <div className='relative group overflow-hidden rounded-xl bg-surface aspect-[3/4] shadow-md shadow-primary-container/10 hover:shadow-2xl hover:shadow-primary-container/30 hover:-translate-y-2 transition-all duration-500 ease-out'>
        <img
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
          data-alt='Portrait of a female doctor with a warm smile, wearing a white coat in a modern, well-lit clinic setting'
          src={src}
        />
        <div className='absolute inset-0 bg-[#391494]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/80 group-hover:via-black/40 z-10'></div>
        <div className='absolute inset-0 p-md flex flex-col justify-end z-20'>
          <div className='transform transition-transform duration-500 group-hover:-translate-y-4'>
            <span className='label-caps text-label-caps text-tertiary-fixed-dim tracking-wider uppercase mb-2 block'>{specialty}</span>
            <h3 className='font-headline-md text-headline-md text-white'>{title}</h3>
          </div>
          <div className='grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out'>
            <div className='overflow-hidden'>
              <p className='font-body-md text-body-md text-inverse-primary mt-2 mb-2 line-clamp-2'>{title}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='bg-primary-container/60 text-white border border-white/20 label-caps text-[10px] px-2 py-1 rounded-full backdrop-blur-sm'>
                  Trastornos del ánimo
                </span>
                <span className='bg-primary-container/60 text-white border border-white/20 label-caps text-[10px] px-2 py-1 rounded-full backdrop-blur-sm'>
                  Ansiedad
                </span>
                <span className='bg-primary-container/60 text-white border border-white/20 label-caps text-[10px] px-2 py-1 rounded-full backdrop-blur-sm'>
                  Psicofarmacología
                </span>
              </div>
              <button className='w-full bg-secondary-container text-on-secondary-container label-caps text-label-caps uppercase py-3 rounded-lg hover:bg-secondary-fixed transition-colors'>
                Agendar Cita
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
