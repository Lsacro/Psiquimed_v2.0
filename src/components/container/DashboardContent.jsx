import { useEffect, useState } from 'react';
import QuickActionButton from '../buttons/QuickActionsButton';
import { supabase } from '../../../utils/supabase';

export default function DashboardContent() {
  const [profesionales, setProfesionales] = useState([]);
  const [articles, setArticles] = useState([]);
  const [services, setServices] = useState([]);

  const quickActionsList = [
    { name: 'Anadir Doctor', icon: 'person_add', url: '/dashboard/doctors' },
    { name: 'Anadir Articulo', icon: 'article', url: '/dashboard/articles' },
    { name: 'Anadir Servicio', icon: 'medical_services', url: '/dashboard/services' },
    { name: 'Contacto', icon: 'edit', url: '/dashboard/contact' },
  ];

  useEffect(() => {
    async function fetchProfesionales() {
      const { data, error } = await supabase.from('professionals').select('id');

      if (error) {
        console.error(error);
        return;
      }

      setProfesionales(data ?? []);
    }

    fetchProfesionales();

    async function fetchArticles() {
      const { data, error } = await supabase.from('articles_home').select('id');

      if (error) {
        console.error(error);
        return;
      }

      setArticles(data ?? []);
    }

    fetchArticles();

    async function fetchServices() {
      const { data, error } = await supabase.from('services').select('id');

      if (error) {
        console.error(error);
        return;
      }

      setServices(data ?? []);
    }

    fetchServices();
  }, []);

  const totalProfesionales = profesionales.length;
  const totalArticles = articles.length;
  const totalServices = services.length;

  return (
    <>
      <div className='p-gutter md:p-lg max-w-container-max mx-auto w-full'>
        <div className='flex justify-between items-end mb-md'>
          <div>
            <h2 className='font-headline-lg text-headline-lg text-primary-container mb-xs'>Bienvenido, Admin</h2>
            <p className='font-body-md text-body-md text-on-surface-variant'>Aquí está un resumen de tu empresa</p>
          </div>
        </div>
        {/* <!-- Stats Bento Grid --> */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-gutter mb-lg'>
          {/* <!-- Stat Card 1 --> */}
          <div className='bg-surface-container-lowest p-md rounded-xl border border-surface-variant shadow-[0_2px_4px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_20px_rgba(57,20,148,0.08)] transition-all duration-300 relative overflow-hidden group'>
            <div className='absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed rounded-full opacity-50 group-hover:scale-110 transition-transform'></div>
            <div className='flex justify-between items-start mb-4 relative z-10'>
              <div className='p-2 bg-primary-container rounded-lg text-white'>
                <span className='material-symbols-outlined'>medical_services</span>
              </div>
            </div>
            <div className='relative z-10'>
              <p className='font-label-caps text-label-caps text-outline mb-1'>DOCTORES TOTALES</p>
              <h3 className='font-headline-xl text-headline-xl text-on-surface'>{totalProfesionales}</h3>
            </div>
          </div>
          {/* <!-- Stat Card 2 --> */}
          <div className='bg-surface-container-lowest p-md rounded-xl border border-surface-variant shadow-[0_2px_4px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_20px_rgba(57,20,148,0.08)] transition-all duration-300 relative overflow-hidden group'>
            <div className='absolute -right-4 -top-4 w-24 h-24 bg-secondary-container rounded-full opacity-50 group-hover:scale-110 transition-transform'></div>
            <div className='flex justify-between items-start mb-4 relative z-10'>
              <div className='p-2 bg-secondary text-white rounded-lg'>
                <span className='material-symbols-outlined'>article</span>
              </div>
            </div>
            <div className='relative z-10'>
              <p className='font-label-caps text-label-caps text-outline mb-1'>ARTÍCULOS PUBLICADOS</p>
              <h3 className='font-headline-xl text-headline-xl text-on-surface'>{totalArticles}</h3>
            </div>
          </div>
          {/* <!-- Stat Card 3 --> */}
          <div className='bg-surface-container-lowest p-md rounded-xl border border-surface-variant shadow-[0_2px_4px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_20px_rgba(57,20,148,0.08)] transition-all duration-300 relative overflow-hidden group'>
            <div className='absolute -right-4 -top-4 w-24 h-24 bg-tertiary-fixed rounded-full opacity-50 group-hover:scale-110 transition-transform'></div>
            <div className='flex justify-between items-start mb-4 relative z-10'>
              <div className='p-2 bg-tertiary text-white rounded-lg'>
                <span className='material-symbols-outlined'>medical_information</span>
              </div>
            </div>
            <div className='relative z-10'>
              <p className='font-label-caps text-label-caps text-outline mb-1'>SERVICOS ACTIVOS</p>
              <h3 className='font-headline-xl text-headline-xl text-on-surface'>{totalServices}</h3>
            </div>
          </div>
        </div>
        {/* <!-- Content Grid --> */}
        <div className='grid grid-cols-1 gap-gutter w-full'>
          {/* Quick Actions & Pending */}
          <div className='flex flex-col gap-gutter w-full'>
            {/* Quick Actions */}
            <div className='bg-surface-container-lowest p-md rounded-xl border border-surface-variant shadow-[0_2px_4px_rgba(57,20,148,0.05)] w-full'>
              <h3 className='font-headline-md text-headline-md text-on-surface text-lg mb-4'>Quick Actions</h3>

              <div className='grid grid-cols-2 gap-3 md:flex md:flex-row md:justify-start md:items-center'>
                {quickActionsList.map((item, index) => (
                  <div key={index} className='w-full md:flex-1'>
                    <QuickActionButton name={item.name} icon={item.icon} url={item.url} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Bottom spacing --> */}
        <div className='h-xl'></div>
      </div>
    </>
  );
}
