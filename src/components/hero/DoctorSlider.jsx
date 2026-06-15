import { useState } from 'react';
import DoctorCard from '../cards/DoctorCard';
import { useEffect } from 'react';
import { supabase } from '../../../utils/supabase.js';

export default function DoctorSlider() {
  const [profesionales, setProfesionales] = useState([]);
  useEffect(() => {
    async function fetchProfesionales() {
      const { data, error } = await supabase.from('professionals').select('*');
      if (error) {
        console.error(error);
        return;
      }

      setProfesionales(data);
    }

    fetchProfesionales();
  }, []);

  return (
    <section className='py-xl bg-surface px-8 overflow-hidden'>
      <div className='max-w-container-max mx-auto'>
        <div className='text-center mb-lg'>
          <h2 className='font-headline-lg text-headline-lg text-on-surface mb-base'>Nuestros Profesionales</h2>

          <p className='font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto'>
            Un equipo multidisciplinario dedicado a tu salud mental con empatía y experiencia clínica.
          </p>
        </div>

        <div className='flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-4'>
          {profesionales.map((profesionales, index) => (
            <DoctorCard key={index} profesionales={profesionales} index={profesionales.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
