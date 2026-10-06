import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../../utils/supabase';

function ServiceCard({ service, variant = 'default', action = 'more' }) {
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';

  return (
    <article
      className={`
        bg-surface-container-lowest
        rounded-xl
        border border-outline-variant/20
        shadow-[0_2px_10px_rgba(57,20,148,0.05)]
        hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)]
        transition-all duration-300
        group
        h-full
        ${isFeatured ? 'p-md flex flex-col md:flex-row items-center gap-6' : isCompact ? 'p-6 flex flex-col' : 'p-md flex flex-col'}
      `}
    >
      {/* Imagen del servicio destacado */}
      {isFeatured && (
        <div className='w-full md:w-1/3 h-48 md:h-full rounded-lg overflow-hidden bg-surface-container shrink-0'>
          <img
            src='https://lh3.googleusercontent.com/aida-public/AB6AXuBhSUQxYSP1bXVnTBIEfFTCdgejqeQBSyK4-7rFrF9Qk3xMqqAso5E4SMJ3htCVj97Pu66Bu0tw_dzEpNMtq8xdguR_gCaKWQtOJw-Vov348obY6qqo7WX7rOCZuO25an5Oc02BvTIl8TfAZ2hgh7VIzLwqSOXBZzRyy9QFFLvZYnNSBujVx_yR1uAJM07L46FfXIlLXYoVcn19X-GBwK2SllHv6Ba2IAbLAwXeyWS5_wTki9MyvToDtHi7f4OQsuD_brfS3g1MtLg'
            alt={service.title}
            className='w-full h-full object-cover opacity-80'
          />
        </div>
      )}

      <div className='flex flex-col flex-1 w-full'>
        {/* Icono */}
        <div
          className={`
            ${isFeatured || isCompact ? 'w-10 h-10' : 'w-12 h-12'}
            rounded-lg
            flex
            items-center
            justify-center
            mb-5
            shrink-0
            transition-colors
            ${isCompact ? 'bg-secondary-fixed text-secondary' : 'bg-primary-fixed text-primary-container'}
            group-hover:bg-primary-container
            group-hover:text-on-primary
          `}
        >
          <span className='material-symbols-outlined'>{service.icon}</span>
        </div>

        {/* Título */}
        <h3
          className={`
            text-on-surface
            mb-3
            ${isCompact ? 'font-headline-md text-[20px] font-semibold' : 'font-headline-md text-headline-md'}
          `}
        >
          {service.title}
        </h3>

        {/* Descripción */}
        <p
          className={`
            text-on-surface-variant
            ${isCompact ? 'text-sm' : 'font-body-md text-body-md'}
            mb-6
            ${!isCompact ? 'flex-grow' : ''}
          `}
        >
          {service.home_resume}
        </p>

        {/* Acción */}
        {action === 'more' && (
          <Link to='/services' className='text-primary-container font-body-md font-medium flex items-center hover:text-primary mt-auto'>
            Saber más
            <span className='material-symbols-outlined ml-1 text-sm'>arrow_forward</span>
          </Link>
        )}

        {action === 'schedule' && (
          <a
            href='https://wa.me/593998964126'
            target='_blank'
            rel='noopener noreferrer'
            className='w-full bg-surface-variant text-on-surface hover:bg-outline-variant py-2 rounded-lg font-body-md font-medium transition-colors text-center mt-auto'
          >
            Agendar Consulta
          </a>
        )}

        {action === 'calendar' && (
          <Link to='/contact' className='text-primary-container text-sm font-medium hover:text-primary mt-auto'>
            Ver calendario
          </Link>
        )}
      </div>
    </article>
  );
}

export default function ServiceHome() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const { data, error } = await supabase.from('services').select('id, title, home_resume, icon').order('id', { ascending: true });

      if (error) {
        console.error('Error obteniendo servicios:', error);
        return;
      }

      setServices(data ?? []);
    }

    fetchServices();
  }, []);

  /*
   * Distribución de servicios:
   *
   * 1 - 4  → tarjetas normales
   * 5     → tarjeta destacada
   * 6 - 7 → columna de tarjetas compactas
   * 8 - 9 → columna de tarjetas compactas
   */

  const topServices = services.slice(0, 4);
  const featuredService = services[4];
  const middleServices = services.slice(5, 7);
  const bottomServices = services.slice(7, 9);

  return (
    <section className='py-xl px-6 bg-background'>
      <div className='max-w-[1200px] mx-auto'>
        {/* Encabezado */}
        <div className='text-center mb-16'>
          <h2 className='font-headline-lg text-headline-lg text-on-surface mb-4'>Soluciones para tu bienestar</h2>

          <p className='font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto'>
            Enfoques terapéuticos diseñados a la medida de tus necesidades, guiados por especialistas en salud mental
          </p>
        </div>

        {/* Servicios */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-md'>
          {/* Servicios 1 - 4 */}
          {topServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} action={index >= 2 ? 'schedule' : 'more'} />
          ))}

          {/* Servicio destacado - Servicio 5 */}
          {featuredService && (
            <div className='md:col-span-2'>
              <ServiceCard service={featuredService} variant='featured' />
            </div>
          )}

          {/* Servicios 6 - 7 */}
          {middleServices.length > 0 && (
            <div className='flex flex-col gap-md'>
              {middleServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} variant='compact' action={index === 1 ? 'calendar' : 'more'} />
              ))}
            </div>
          )}

          {/* Servicios 8 - 9 */}
          {bottomServices.length > 0 && (
            <div className='flex flex-col gap-md'>
              {bottomServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} variant='compact' action={index === 1 ? 'calendar' : 'more'} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
