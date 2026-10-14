import { useEffect, useState } from 'react';
import DashServiceCard from '../cards/DashServiceCard';

import { supabase } from '../../../utils/supabase';
import NewService from '../cards/NewService';

export default function DashServicesContainer() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showNewService, setShowNewService] = useState(false);
  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    setLoading(true);
    setError('');

    const { data, error } = await supabase.from('services').select('*').order('id', { ascending: true });

    if (error) {
      console.error('Error al cargar servicios:', error);
      setError('No se pudieron cargar los servicios.');
    } else {
      setServices(data ?? []);
    }

    setLoading(false);
  }

  return (
    <div className='flex-1 p-6 md:p-12 w-full max-w-[1200px] mx-auto'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md'>
        <div>
          <h2 className='font-headline-lg text-headline-lg text-on-background mb-xs'>Servicios</h2>
          <p className='font-body-lg text-body-lg text-on-surface-variant'>Visualice, añada y edite los servicios que ofrece la clínica.</p>
        </div>

        <button
          type='button'
          onClick={() => setShowNewService(true)}
          className='bg-primary-container text-white rounded-lg py-sm px-md flex items-center justify-center gap-2 hover:bg-primary transition-colors'
        >
          <span className='material-symbols-outlined'>add</span>
          Añadir servicio
        </button>
      </div>

      {error && (
        <div className='mb-4 text-sm text-red-600' role='alert'>
          {error}
          <button type='button' onClick={fetchServices} className='ml-2 underline'>
            Reintentar
          </button>
        </div>
      )}

      {loading ? (
        <p className='text-sm text-on-surface-variant'>Cargando servicios...</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter'>
          {services.map((service) => (
            <DashServiceCard
              key={service.id}
              service={service}
              onUpdate={(updatedService) => {
                setServices((current) => current.map((item) => (item.id === updatedService.id ? updatedService : item)));
              }}
              onDelete={(deletedId) => {
                setServices((current) => current.filter((item) => item.id !== deletedId));
              }}
            />
          ))}

          {services.length === 0 && <p className='col-span-full text-center text-on-surface-variant py-8'>No hay servicios registrados.</p>}
        </div>
      )}

      {showNewService && (
        <NewService
          onClose={() => setShowNewService(false)}
          onCreated={(newService) => {
            setServices((current) => [...current, newService]);
          }}
        />
      )}
    </div>
  );
}
