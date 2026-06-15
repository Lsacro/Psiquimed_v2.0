import ProfessionalCard from '../cards/ProfessionalCard';

import { useEffect } from 'react';
import { useState } from 'react';

import { supabase } from '../../../utils/supabase.js';

export default function ProfessionalsContainer() {
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
    <>
      <section className='w-full pb-xl px-6'>
        <div className='max-w-container-max mx-auto'>
          <div className='flex overflow-x-auto hide-scrollbar gap-sm mb-lg pb-2 justify-start md:justify-center border-b border-surface-variant px-2 md:px-0'>
            <button className='px-6 py-2 rounded-full label-caps label-caps uppercase bg-primary-container text-white whitespace-nowrap transition-colors flex-shrink-0'>
              Todos
            </button>
            <button className='px-6 py-2 rounded-full label-caps label-caps uppercase bg-surface-container hover:bg-surface-variant text-on-surface-variant whitespace-nowrap transition-colors flex-shrink-0'>
              Psiquiatría
            </button>
            <button className='px-6 py-2 rounded-full label-caps label-caps uppercase bg-surface-container hover:bg-surface-variant text-on-surface-variant whitespace-nowrap transition-colors flex-shrink-0'>
              Psicología
            </button>
            <button className='px-6 py-2 rounded-full label-caps label-caps uppercase bg-surface-container hover:bg-surface-variant text-on-surface-variant whitespace-nowrap transition-colors flex-shrink-0'>
              Terapia
            </button>
            <button className='px-6 py-2 rounded-full label-caps label-caps uppercase bg-surface-container hover:bg-surface-variant text-on-surface-variant whitespace-nowrap transition-colors flex-shrink-0'>
              Neuropsicología
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md lg:gap-gutter'>
            {profesionales.map((professional, index) => (
              <ProfessionalCard
                key={index}
                id={professional.id}
                doctor_name={professional.doctor_name}
                title={professional.title}
                area={professional.area}
                treatment_1={professional.treatment_1}
                treatment_2={professional.treatment_2}
                treatment_3={professional.treatment_3}
                img_url={professional.img_url}
                linkedin={professional.linkedin_url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
