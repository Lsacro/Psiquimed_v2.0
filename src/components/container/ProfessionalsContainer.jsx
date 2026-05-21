import ProfessionalCard from '../cards/ProfessionalCard';

const professionals = [
  {
    name: 'Dra. Elena Ruiz',
    title: 'Dra. Elena Ruiz',
    specialty: 'Psiquiatría',
    description: 'Especialista en trastornos del estado de ánimo y abordajes psicofarmacológicos.',
    specialties: ['Trastornos del ánimo', 'Ansiedad', 'Psicofarmacología'],
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQcXyWCCAJ2zvtoBrlO1FRiTp_bvfNXllZBkQKr6q-p0d-apMBVeqhpnbzBouRnJsjIDdyJ8h8NJfh9Sz6YRE8iK_jTLC_rXJZMro5fYGH4l04NMMOml2nDARgpKgktp-_ES-PE3WWSuhsUInx0L1rKmpiK6YBwDD1FhasaTSm9Mlq_P0fT-SocJVYrbkYPL-Aa-siu99vHbwNBeh1wGnhynIfMxh45Q9G0hv8zChXWhvxSdbG6lmGDKUG50PDKHj7koY7RDc1a0E',
  },
  {
    name: 'carlos-silva',
    title: 'Dr. Carlos Silva',
    specialty: 'Psicología',
    description: 'Experto en terapia cognitivo-conductual, manejo del estrés y terapia de pareja.',
    specialties: ['Terapia cognitivo-conductual', 'Depresión', 'Autoestima'],
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCpvLS_qjFjjgNuFiAZlJ68ENAbtj_5HSS3Z7n1BnuwDYcSbxwWDw4_B1_LjfwAW8GG-KP5VwhAi0j_FSVCdEt9AyWUdQE0Lpha7h8mIabxpK63H-VSkCzBrvsUW27y2GDQBEh_UJO5AXkaAfGE_lNRH974ssKvHiAUQY1AxRYKdgigaLeeBED1PLSjm95m3P2The_3RynVuB4hKOw0zx6DSZktWLzua4ONKfRdTWT1RE71NqvcelVHB7NZJPKL64wcqpAGpfZdXg',
  },
  {
    name: 'ana-gomez',
    title: 'Lic. Ana Gómez',
    specialty: 'Neuropsicología',
    description: 'Especializada en evaluación cognitiva, TDAH en adultos y rehabilitación neuropsicológica.',
    specialties: ['Evaluación cognitiva', 'Rehabilitación de memoria', 'TDAH'],
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlNFlghUoCxkWwwz4YrkKDBLSl7RPFulDbO9qtJOZ1kOo9D44newVYnWoJMGUlQXjvOSAU58wxqSFGyT9k48F7aCL_1LL0a8x0864g8FOqdgTR0q71Tcy5RJG_r7q5V2MZHessSFPTcokro6s5GZXuwOT8x_IRPKySbU16NksR3Or0YvskBTx_hz6VpdShG2v_AB5wmwqslQiWAo6GiUj4tKexUk5K0QJeQa0kVzFZ2Wlay7aVPut0meRKYHDPk3nqHrMUDxjUm4o',
  },
  {
    name: 'luis-medina',
    title: 'Dr. Luis Medina',
    specialty: 'Psiquiatría Infantil',
    description: 'Atención integral en trastornos del neurodesarrollo, autismo y problemas conductuales.',
    specialties: ['Trastornos del desarrollo', 'Autismo', 'Ansiedad infantil'],
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCqfAtBcgbchGfQCZkXNqM8endAzsCMXL6CsYxAhDRyKn_mmhjSGoP-ysWPO8JgTqbXCaoNzPHzoDjXYVyQEyIuu0Mygh6Yuz1xvI4wKSm1VdBgZ8pgNeu6Lvyj7QCXTQ3xbX8XTdQht0mVRbK0AlG23Y3mj8mSVqTe7regmP3DOAfI_ED4PxyTOZ1Zxy-lVYUiokrFSS4v8SO9exQfJe1wP93p6yCJ4dLMN-GaMLJXKG4fv8AHnHXmQrVGswrTEbTvK7gXK75fTs',
  },
  {
    name: 'ricardo-mendoza',
    title: 'Dr. Ricardo Mendoza',
    specialty: 'Terapia',
    description: 'Especialista en fobias, TOC y trastornos de pánico mediante terapia de exposición.',
    specialties: ['Terapia de pareja', 'Resolución de conflictos', 'Mediación familiar'],
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtSDU_h6JfhUtKzSoJ5o9azIUU_0qJJKHspQp_Or0LewP6Ph5RGeLTAOqNYnxQ9kGG1VmxqCjEcCV7GXa41dQ0i99_LG9fC0ABHDIRVHICc95gxn06Pu5Ei6tUA81VcTVAsALKC9_oLqhz7r0YUf9zRTkGv0TiVBzrnFOwhbWghmfcd99CR3ra5uYUUV7SJUhUnkHhNJb5MXhaRhpUnTKLanY02yqrWLALs_cEFGAz7vbP1IBBCKdp-G0jwc_FV0TD_GjKrsAQcDI',
  },
  {
    name: 'sofia-varela',
    title: 'Dra. Sofía Varela',
    specialty: 'Psiquiatría',
    description: 'Psiquiatría de enlace y medicina psicosomática. Tratamiento de trastornos del sueño.',
    specialties: ['Salud mental perinatal', 'Trastornos bipolares', 'Psicosis'],
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaPK3jODTZeOji6gH1UBmLpdlSa3nh0N1B2a0BJJjk9h63GJNJMQf6H5mA1tWblQJw7XUUtIuwDBsjP8Hf1zCAHZPGtz24-gs62W18f95oS2HvXu-ysf7snLIGR8GU8Z2wSHiGSh3RT_jhj_NM1idBVPtpZMlFpgIIMHMH1P4heSwdRZMZSVc513mjXXb1GzTkcpHsM4DBU6hliNWivb3Z17CEcVlPz3mOC57i3JYTZU2LZqLG1ntRaCXOJNEKsK3FEBt2gARUnkY',
  },
  {
    name: 'gabriel-torres',
    title: 'Lic. Gabriel Torres',
    specialty: 'Psicología',
    description: 'Acompañamiento en procesos de duelo, crisis vitales y desarrollo de la autoestima.',
    specialties: ['Adolescentes', 'Gestión del estrés', 'Orientación vocacional'],
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPI6wybOZTixzFbwndfMLTyYLatGHrfXtYLOzh3BUZ0bHLFwYVKH7y4WwRq6ZitfA29cOZyGXLa278LX0oPC2coNe2VRnz9jwy-ADtvZOQM15gZR1xkmz_DEZB-lf1rEm05p7EO3CTodHFV_HS6gYU1yz_Ycl4U2c0YoxXRGaYdsXulxgIRY2ceHBVoigCvN4SUIBeBPq2O7OYh4g3rI7QMq8cw4QXTDrot-0M5M2wl6lG9HxBZRcJWZnyqSeneKbxVc4A4wbVH2k',
  },
];

export default function ProfessionalsContainer() {
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
            {professionals.map((professional, index) => (
              <ProfessionalCard
                key={index}
                name={professional.name}
                title={professional.title}
                specialty={professional.specialty}
                specialties={professional.specialties}
                src={professional.src}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
