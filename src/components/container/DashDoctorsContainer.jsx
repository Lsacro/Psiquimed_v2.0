import { useEffect, useState } from 'react';
import DashDoctorsCard from '../cards/DoctorsDashCard';
import { supabase } from '../../../utils/supabase';
import NewDoctor from '../buttons/NewDoctor';

export default function DashDoctorsContainer() {
  const [profesionales, setProfesionales] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
  return (
    <>
      <div className='flex-1 overflow-y-auto p-lg'>
        <div className='max-w-container-max mx-auto'>
          {/* <!-- Page Header & Global Action --> */}
          <div className='flex flex-col md:flex-row md:items-center justify-between mb-lg gap-md'>
            <div>
              <h2 className='font-headline-lg text-headline-lg text-primary mb-1'>Administaración del personal</h2>
              <p className='font-body-md text-body-md text-on-surface-variant'>
                Visualice y gestione profesionales clínicos, especialidades y acceso
              </p>
            </div>
            <button
              className='bg-primary-container text-white px-md py-sm rounded-lg font-manrope font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary transition-colors shadow-[0_2px_4px_rgba(57,20,148,0.1)] active:scale-95'
              onClick={() => setIsOpen(true)}
            >
              <span className='material-symbols-outlined text-[20px]'>person_add</span>
              Añadir nuevo miembro
            </button>
            <NewDoctor
              open={isOpen}
              onClose={() => setIsOpen(false)}
              onCreated={(newDoctor) => {
                setProfesionales((prev) => [...prev, newDoctor]);
              }}
            />
          </div>
          {/* <!-- Data Table Container (Card Style) --> */}
          <div className='bg-surface-container-lowest rounded-xl shadow-[0_2px_4px_rgba(57,20,148,0.05)] border border-surface-variant overflow-hidden'>
            {/* <!-- Table Header --> */}
            <div className='grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container-low border-b border-surface-variant font-label-caps text-label-caps text-outline uppercase tracking-wider'>
              <div className='col-span-5 md:col-span-4'>Professional</div>
              <div className='col-span-4 md:col-span-4 hidden md:block'>Specialties</div>
              <div className='col-span-3 md:col-span-2'>Status</div>
              <div className='col-span-4 md:col-span-2 text-right'>Actions</div>
            </div>
            {/* <!-- Table Body --> */}
            <div className='flex flex-col divide-y divide-surface-variant'>
              {profesionales.map((profesional) => (
                <DashDoctorsCard
                  id={profesional.id}
                  key={profesional.id}
                  title={profesional.title}
                  category={profesional.category}
                  speciality={profesional.speciality}
                  img_url={profesional.img_url}
                  doctor_name={profesional.doctor_name}
                  treatment_1={profesional.treatment_1}
                  treatment_2={profesional.treatment_2}
                  treatment_3={profesional.treatment_3}
                  area={profesional.area}
                  linkedin_url={profesional.linkedin_url}
                  description={profesional.description}
                  onUpdate={(updatedDoctor) => {
                    setProfesionales((prev) => prev.map((doctor) => (doctor.id === updatedDoctor.id ? updatedDoctor : doctor)));
                  }}
                  onDelete={(deletedDoctorId) => {
                    setProfesionales((prev) => prev.filter((doctor) => doctor.id !== deletedDoctorId));
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
