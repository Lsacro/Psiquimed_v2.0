export default function ServiceCard({ service, onLearnMore }) {
  return (
    <article
      className='group bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden shadow-[0_4px_20px_rgba(57,20,148,0.04)] hover:shadow-[0_16px_36px_rgba(57,20,148,0.12)] transition-all duration-300 flex flex-col hover:-translate-y-1'
      data-category={service.category}
    >
      {/* =========================
          IMAGEN
      ========================== */}
      <div className='relative h-56 overflow-hidden bg-surface-container'>
        <img
          src={service.img_url}
          alt={service.title}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
          loading='lazy'
        />

        {/* Categoría */}
        <span className='absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary font-semibold text-xs px-3 py-1 rounded-full shadow-sm'>
          {service.category_label || service.category}
        </span>
      </div>

      {/* =========================
          CONTENIDO
      ========================== */}
      <div className='p-6 flex flex-col flex-grow'>
        {/* Icono + título */}
        <div className='flex items-center gap-2 mb-2 text-primary'>
          {service.icon && <span className='material-symbols-outlined text-xl'>{service.icon}</span>}

          <h3 className='font-headline-md text-xl font-bold text-on-surface'>{service.title}</h3>
        </div>

        {/* Descripción */}
        <p className='font-body-md text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow'>{service.resume}</p>

        {/* =========================
            BOTONES
        ========================== */}
        <div className='pt-4 border-t border-outline-variant/20 flex items-center justify-between'>
          {/* Conocer más */}
          <button
            type='button'
            onClick={onLearnMore}
            className='text-primary-container font-semibold text-sm flex items-center gap-1 group-hover:text-primary transition-colors cursor-pointer'
          >
            Conocer más
            <span className='material-symbols-outlined text-base transition-transform group-hover:translate-x-1'>arrow_forward</span>
          </button>

          {/* Agendar */}
          <button
            type='button'
            className='text-xs font-semibold px-3 py-1.5 rounded-md bg-primary-fixed/60 text-primary hover:bg-primary hover:text-white transition-colors'
          >
            Agendar cita
          </button>
        </div>
      </div>
    </article>
  );
}
