export default function ServiceHero() {
  return (
    <>
      <section className='relative pt-xl pb-xl px-6 bg-surface overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary-fixed to-surface-container opacity-50 z-0'></div>
        <div className='max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-lg items-center'>
          <div>
            <span className='font-label-caps label-caps text-secondary px-3 py-1 bg-secondary-container/20 rounded-full w-fit mb-sm'>
              Cuidado Integral
            </span>
            <h1 className='font-headline-xl text-headline-xl text-on-surface mb-6'>Nuestros Servicios Especializados</h1>
            <p className='font-body-lg text-body-lg text-on-surface-variant mb-8 text-lg'>
              Brindamos atención especializada en salud mental, integrando evaluación, diagnóstico y tratamiento con un enfoque multidisciplinario,
              basado en evidencia científica y centrado en las necesidades de cada persona
            </p>
            <button className='bg-primary-container text-on-primary px-8 py-3 rounded-lg font-body-md font-medium hover:bg-primary transition-colors shadow-[0_10px_30px_rgba(57,20,148,0.12)] cursor-pointer'>
              Conoce nuestro equipo
            </button>
          </div>
          <div className='relative h-[400px] rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(57,20,148,0.12)] border border-outline-variant/30'>
            <img
              alt='Profesional de salud mental sonriendo en un consultorio moderno y luminoso'
              className='w-full h-full object-cover'
              data-alt='Female therapist in modern bright office, soft lighting, compassionate smile, professional attire, calming environment'
              src='https://hoghcgkenvzxcmiuqaou.supabase.co/storage/v1/object/public/psiquimed_images/service_page/services_page.jpeg'
            />
          </div>
        </div>
      </section>
    </>
  );
}
