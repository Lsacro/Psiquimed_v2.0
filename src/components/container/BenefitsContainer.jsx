export default function BenefitsContainer() {
  return (
    <>
      <section className='py-xl px-6 bg-surface-container-low border-y border-outline-variant/20'>
        <div className='max-w-[1200px] mx-auto text-center'>
          <h2 className='font-headline-lg text-headline-lg text-on-surface mb-12'>Por qué elegir Psiquimed</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-lg'>
            <div className='flex flex-col items-center'>
              <div className='w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mb-6'>
                <span className='material-symbols-outlined text-3xl' data-icon='support_agent'>
                  support_agent
                </span>
              </div>
              <h3 className='font-headline-md text-[20px] text-on-surface mb-3'>Atención Personalizada</h3>
              <p className='font-body-md text-on-surface-variant text-center '>Cada tratamiento se adapta a tu historia y necesidades específicas.</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mb-6'>
                <span className='material-symbols-outlined text-3xl' data-icon='lock'>
                  lock
                </span>
              </div>
              <h3 className='font-headline-md text-[20px] text-on-surface mb-3'>Confidencialidad Absoluta</h3>
              <p className='font-body-md text-on-surface-variant text-center '>
                Tu privacidad y la seguridad de tu información son nuestra prioridad.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mb-6'>
                <span className='material-symbols-outlined text-3xl' data-icon='verified'>
                  verified
                </span>
              </div>
              <h3 className='font-headline-md text-[20px] text-on-surface mb-3'>Expertos Certificados</h3>
              <p className='font-body-md text-on-surface-variant text-center '>Equipo médico de alto nivel con formación continua en salud mental.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
