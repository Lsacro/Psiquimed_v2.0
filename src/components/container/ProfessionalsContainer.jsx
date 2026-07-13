import { useEffect, useState } from 'react';
import { supabase } from '../../../utils/supabase.js';
import ProfessionalCard from '../cards/ProfessionalCard';

export default function ProfessionalsContainer() {
  const [profesionales, setProfesionales] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  useEffect(() => {
    async function fetchProfesionales() {
      const { data, error } = await supabase.from('professionals').select('*').order('doctor_name');

      if (error) {
        console.error(error);
        return;
      }

      setProfesionales(data ?? []);
    }

    fetchProfesionales();
  }, []);

  // Categorías únicas
  const categorias = ['Todos', ...new Set(profesionales.map((p) => p.category).filter(Boolean))];

  // Profesionales filtrados
  const profesionalesFiltrados =
    categoriaSeleccionada === 'Todos' ? profesionales : profesionales.filter((p) => p.category === categoriaSeleccionada);

  return (
    <section className='w-full pb-xl px-6'>
      <div className='max-w-container-max mx-auto'>
        {/* Categorías */}
        <div className='w-full overflow-x-auto hide-scrollbar'>
          <div className='flex gap-sm min-w-max px-4 py-2'>
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaSeleccionada(categoria)}
                className={`flex-none px-6 py-2 rounded-full uppercase whitespace-nowrap ${
                  categoriaSeleccionada === categoria ? 'bg-primary-container text-white' : 'bg-surface-container'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Profesionales */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md lg:gap-gutter pt-8'>
          {profesionalesFiltrados.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              id={professional.id}
              doctor_name={professional.doctor_name}
              title={professional.title}
              area={professional.category}
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
  );
}
