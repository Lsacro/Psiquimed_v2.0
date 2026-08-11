import { useState } from 'react';
import ServiceCard from '../cards/ServiceCard';
import { useEffect } from 'react';
import { supabase } from '../../../utils/supabase';

export default function ServicesContainer() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    async function fetchservices() {
      const { data, error } = await supabase.from('services').select('title, description, icon');
      if (error) {
        console.error(error);
        return;
      }

      setServices(data);
    }

    fetchservices();
  }, []);
  return (
    <section className='py-xl bg-surface-container-low px-8'>
      <div className='max-w-container-max mx-auto'>
        <div className='text-center mb-lg'>
          <h2 className='font-headline-lg text-headline-lg text-on-surface mb-base'>Nuestros Servicios</h2>
          <p className='font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto'>
            Enfoques terapéuticos diseñados para restaurar el equilibrio y promover el bienestar integral
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-gutter'>
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
