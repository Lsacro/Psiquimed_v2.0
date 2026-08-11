import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../../utils/supabase';

export default function ServiceHome() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    async function fetchservices() {
      const { data, error } = await supabase.from('services').select('title, resume,icon');
      if (error) {
        console.error(error);
        return;
      }

      setServices(data);
    }

    fetchservices();
  }, []);

  return (
    <>
      <section className='py-xl px-6 bg-background'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='font-headline-lg text-headline-lg text-on-surface mb-4'>Soluciones para tu bienestar</h2>
            <p className='font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto'>
              Enfoques terapéuticos diseñados a la medida de tus necesidades, guiados por especialistas en salud mental
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-md'>
            <div className='bg-surface-container-lowest rounded-xl p-md border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 group flex flex-col h-full'>
              <div className='w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-on-primary transition-colors'>
                <span className='material-symbols-outlined' data-icon='person'>
                  {services[0]?.icon}
                </span>
              </div>
              <h3 className='font-headline-md text-headline-md text-on-surface mb-3'>{services[0]?.title}</h3>
              <p className='font-body-md text-body-md text-on-surface-variant mb-6 flex-grow'>{services[0]?.resume}</p>
              <Link to='/services' className='text-primary-container font-body-md font-medium flex items-center hover:text-primary mt-auto'>
                Saber más{' '}
                <span className='material-symbols-outlined ml-1 text-sm' data-icon='arrow_forward'>
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className='bg-surface-container-lowest rounded-xl p-md border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 group flex flex-col h-full'>
              <div className='w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors'>
                <span className='material-symbols-outlined' data-icon='favorite'>
                  {services[1]?.icon}
                </span>
              </div>
              <h3 className='font-headline-md text-headline-md text-on-surface mb-3'>{services[1]?.title}</h3>
              <p className='font-body-md text-body-md text-on-surface-variant mb-6 flex-grow'>{services[1]?.resume}</p>
              <Link to='/services' className='text-primary-container font-body-md font-medium flex items-center hover:text-primary mt-auto'>
                Saber más{' '}
                <span className='material-symbols-outlined ml-1 text-sm' data-icon='arrow_forward'>
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className='bg-surface-container-lowest rounded-xl p-md border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 group flex flex-col h-full'>
              <div className='w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-on-primary transition-colors'>
                <span className='material-symbols-outlined' data-icon='medical_services'>
                  {services[2]?.icon}
                </span>
              </div>
              <h3 className='font-headline-md text-headline-md text-on-surface mb-3'>{services[2]?.title}</h3>
              <p className='font-body-md text-body-md text-on-surface-variant mb-6 flex-grow'>{services[2]?.resume}</p>
              <button className='w-full bg-surface-variant text-on-surface hover:bg-outline-variant py-2 rounded-lg font-body-md font-medium transition-colors mt-auto'>
                <Link to='https://wa.me/593998964126' target='_blank'>
                  Agendar Consulta
                </Link>
              </button>
            </div>
            <div className='bg-surface-container-lowest rounded-xl p-md border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 group flex flex-col h-full'>
              <div className='w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-on-primary transition-colors'>
                <span className='material-symbols-outlined' data-icon='medical_services'>
                  {services[3]?.icon}
                </span>
              </div>
              <h3 className='font-headline-md text-headline-md text-on-surface mb-3'>{services[3]?.title}</h3>
              <p className='font-body-md text-body-md text-on-surface-variant mb-6 flex-grow'>{services[3]?.resume}</p>
              <button className='w-full bg-surface-variant text-on-surface hover:bg-outline-variant py-2 rounded-lg font-body-md font-medium transition-colors mt-auto'>
                <Link to='https://wa.me/593998964126' target='_blank'>
                  Agendar Consulta
                </Link>
              </button>
            </div>
            <div className='bg-surface-container-lowest rounded-xl p-md border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 md:col-span-2 group flex flex-col md:flex-row items-center gap-6 h-full'>
              <div className='w-full md:w-1/3 h-48 md:h-full rounded-lg overflow-hidden bg-surface-container hidden md:block'>
                <img
                  alt='Evaluación cognitiva'
                  className='w-full h-full object-cover opacity-80'
                  data-alt='Doctor discussing brain scans with patient in a modern clinical setting, soft blue and white lighting, professional focus'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuBhSUQxYSP1bXVnTBIEfFTCdgejqeQBSyK4-7rFrF9Qk3xMqqAso5E4SMJ3htCVj97Pu66Bu0tw_dzEpNMtq8xdguR_gCaKWQtOJw-Vov348obY6qqo7WX7rOCZuO25an5Oc02BvTIl8TfAZ2hgh7VIzLwqSOXBZzRyy9QFFLvZYnNSBujVx_yR1uAJM07L46FfXIlLXYoVcn19X-GBwK2SllHv6Ba2IAbLAwXeyWS5_wTki9MyvToDtHi7f4OQsuD_brfS3g1MtLg'
                />
              </div>
              <div className='w-full md:w-2/3 flex flex-col flex-grow'>
                <div className='w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container mb-4'>
                  <span className='material-symbols-outlined' data-icon='psychology'>
                    {services[4]?.icon}
                  </span>
                </div>
                <h3 className='font-headline-md text-headline-md text-on-surface mb-2'>{services[4]?.title}</h3>
                <p className='font-body-md text-body-md text-on-surface-variant mb-6 flex-grow'>{services[4]?.resume}</p>
                <Link to='/services' className='text-primary-container font-body-md font-medium flex items-center hover:text-primary mt-auto'>
                  Saber más{' '}
                  <span className='material-symbols-outlined ml-1 text-sm' data-icon='arrow_forward'>
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div className='flex flex-col gap-md h-full'>
              <div className='bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 flex-1'>
                <div className='flex items-center gap-4 mb-3'>
                  <div className='w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary'>
                    <span className='material-symbols-outlined' data-icon='family_restroom'>
                      {services[5]?.icon}
                    </span>
                  </div>
                  <h3 className='font-headline-md text-[20px] font-semibold text-on-surface'>{services[5]?.title}</h3>
                </div>
                <p className='font-body-md text-sm text-on-surface-variant mb-4'>{services[5]?.resume}</p>
                <Link to='/services' className='text-primary-container text-sm font-medium hover:text-primary' href='#'>
                  Saber más
                </Link>
              </div>

              <div className='bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 flex-1'>
                <div className='flex items-center gap-4 mb-3'>
                  <div className='w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container'>
                    <span className='material-symbols-outlined' data-icon='groups'>
                      {services[6]?.icon}
                    </span>
                  </div>
                  <h3 className='font-headline-md text-[20px] font-semibold text-on-surface'>{services[6]?.title}</h3>
                </div>
                <p className='font-body-md text-sm text-on-surface-variant mb-4'>{services[6]?.resume}</p>
                <Link to='/contact' className='text-primary-container text-sm font-medium hover:text-primary' href='#'>
                  Ver calendario
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-md h-full'>
              <div className='bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 flex-1'>
                <div className='flex items-center gap-4 mb-3'>
                  <div className='w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary'>
                    <span className='material-symbols-outlined' data-icon='family_restroom'>
                      {services[7]?.icon}
                    </span>
                  </div>
                  <h3 className='font-headline-md text-[20px] font-semibold text-on-surface'>{services[7]?.title}</h3>
                </div>
                <p className='font-body-md text-sm text-on-surface-variant mb-4'>{services[7]?.resume}</p>
                <Link to='/services' className='text-primary-container text-sm font-medium hover:text-primary' href='#'>
                  Saber más
                </Link>
              </div>

              <div className='bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 flex-1'>
                <div className='flex items-center gap-4 mb-3'>
                  <div className='w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container'>
                    <span className='material-symbols-outlined' data-icon='groups'>
                      {services[8]?.icon}
                    </span>
                  </div>
                  <h3 className='font-headline-md text-[20px] font-semibold text-on-surface'>{services[8]?.title}</h3>
                </div>
                <p className='font-body-md text-sm text-on-surface-variant mb-4'>{services[8]?.resume}</p>
                <Link to='/contact' className='text-primary-container text-sm font-medium hover:text-primary' href='#'>
                  Ver calendario
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
