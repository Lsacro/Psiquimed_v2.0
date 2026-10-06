import { useEffect, useState } from 'react';
import ServiceCard from '../cards/ServiceCard';
import { supabase } from '../../../utils/supabase';
import { NavLink } from 'react-router-dom';

export default function ServicesContainer() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      const { data, error } = await supabase.from('services').select('*').order('id', { ascending: true });

      if (error) {
        console.error('Error al obtener servicios:', error);
        setLoading(false);
        return;
      }

      setServices(data || []);
      setLoading(false);
    }

    fetchServices();
  }, []);

  // Filtrar servicios
  const filteredServices = activeFilter === 'all' ? services : services.filter((service) => service.category === activeFilter);

  return (
    <section id='catalogo-servicios' className='py-xl bg-surface-container-low px-8'>
      <div className='max-w-[1200px] mx-auto'>
        {/* =========================
            ENCABEZADO
        ========================== */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-outline-variant/20 gap-6'>
          <div>
            <span className='text-xs font-bold uppercase tracking-wider text-secondary'>Excelencia y empatía</span>

            <h2 className='font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mt-1'>Especialidades Clínicas y Programas</h2>
          </div>

          <p className='text-sm text-on-surface-variant'>Selecciona el área de atención para conocer nuestras especialidades y programas.</p>
        </div>

        {/* =========================
            LOADING
        ========================== */}
        {loading && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className='h-[450px] rounded-2xl bg-surface-container animate-pulse' />
            ))}
          </div>
        )}

        {/* =========================
            SERVICIOS
        ========================== */}
        {!loading && filteredServices.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} onLearnMore={() => setSelectedService(service)} />
            ))}
          </div>
        )}

        {/* =========================
            SIN SERVICIOS
        ========================== */}
        {!loading && filteredServices.length === 0 && (
          <div className='text-center py-16'>
            <p className='text-on-surface-variant'>No hay servicios disponibles para esta categoría.</p>
          </div>
        )}
      </div>

      {/* =========================
          MODAL
      ========================== */}
      {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
    </section>
  );
}

/* =========================================
   MODAL
========================================= */

function ServiceModal({ service, onClose }) {
  useEffect(() => {
    // Evitar scroll del body cuando el modal está abierto
    document.body.classList.add('modal-open');

    // Cerrar con Escape
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const benefits = Array.isArray(service.benefits) ? service.benefits : [];

  return (
    <div
      className='fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8'
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
    >
      {/* =========================
          BACKDROP
      ========================== */}
      <div className='fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm' onClick={onClose} />

      {/* =========================
          MODAL
      ========================== */}
      <div className='relative bg-surface-container-lowest text-on-surface rounded-2xl shadow-2xl border border-outline-variant/40 w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col z-10'>
        {/* =========================
            BOTÓN CERRAR
        ========================== */}
        <button
          type='button'
          aria-label='Cerrar ventana modal'
          onClick={onClose}
          className='absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-on-surface shadow-md flex items-center justify-center transition-transform hover:scale-105'
        >
          <span className='material-symbols-outlined text-2xl'>close</span>
        </button>

        {/* =========================
            CONTENIDO SCROLLABLE
        ========================== */}
        <div className='overflow-y-auto'>
          {/* Imagen */}
          <div className='relative h-64 sm:h-72 w-full bg-surface-container overflow-hidden'>
            <img src={service.img_url} alt={service.title} className='w-full h-full object-cover' />

            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />

            <div className='absolute bottom-6 left-6 right-16'>
              <span className='inline-block bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2'>
                {service.category_label || service.category}
              </span>

              <h2 id='modal-title' className='font-headline-lg text-2xl sm:text-3xl font-extrabold text-white'>
                {service.title}
              </h2>
            </div>
          </div>

          {/* Información */}
          <div className='p-6 sm:p-8 space-y-6'>
            {/* =========================
                DESCRIPCIÓN
            ========================== */}
            <div>
              <h3 className='text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5 mb-2'>
                <span className='material-symbols-outlined text-base'>psychology</span>
                ¿En qué consiste?
              </h3>

              <p className='text-sm sm:text-base text-on-surface-variant leading-relaxed'>{service.intro}</p>
            </div>

            {/* =========================
                BENEFICIOS
            ========================== */}
            {benefits.length > 0 && (
              <div className='bg-surface-container-low p-5 rounded-xl border border-outline-variant/20'>
                <h3 className='text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-3'>
                  <span className='material-symbols-outlined text-base'>verified</span>
                  Objetivos y Beneficios Clave
                </h3>

                <ul className='space-y-2.5 text-sm sm:text-base text-on-surface'>
                  {benefits.map((benefit, index) => (
                    <li key={index} className='flex items-start gap-2.5'>
                      <span className='material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5'>check_circle</span>

                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* =========================
                INDICADO + MODALIDAD
            ========================== */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Para quién */}
              <div className='p-4 rounded-xl border border-outline-variant/30 bg-surface'>
                <h4 className='text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5 mb-1.5'>
                  <span className='material-symbols-outlined text-base text-primary'>groups_3</span>
                  ¿Para quién está indicado?
                </h4>

                <p className='text-sm text-on-surface leading-relaxed'>{service.target}</p>
              </div>

              {/* Modalidad */}
              <div className='p-4 rounded-xl border border-outline-variant/30 bg-surface'>
                <h4 className='text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5 mb-1.5'>
                  <span className='material-symbols-outlined text-base text-secondary'>schedule</span>
                  Modalidad y Duración
                </h4>

                <p className='text-sm text-on-surface leading-relaxed'>{service.duration}</p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            FOOTER
        ========================== */}
        <div className='p-4 sm:p-6 bg-surface-container-low border-t border-outline-variant/20 flex flex-col sm:flex-row justify-end items-center gap-3'>
          <button
            type='button'
            onClick={onClose}
            className='w-full sm:w-auto px-5 py-2.5 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors text-sm font-semibold order-2 sm:order-1'
          >
            Cerrar
          </button>

          <button
            type='button'
            className='w-full sm:w-auto bg-primary-container hover:bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 order-1 sm:order-2'
          >
            <span className='material-symbols-outlined text-lg'>calendar_month</span>
            <NavLink to='https://wa.me/593998964126' target='_blank' rel='noopener noreferrer'>
              Agendar cita para este servicio
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
