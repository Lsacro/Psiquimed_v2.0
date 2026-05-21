import EducationCard from '../cards/EducationCard';

const articles = [
  {
    alt: 'Person practicing mindfulness and stress management by a calm lake at sunrise',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTuIoCFZGbQ9sk_gZqx_Rpe9ygTEnPQ2nQLJUhf_Qiwa_8bI3WZbQz4ilP2PO4EucByrybTflBjl0vZ61r_dLLVp4hourpwCHuMlgNZn7rBhv_bpJ9E2QykxBIXglDAr1ne9RUJYf7KP7-BsSpY1Lpm-GRhttQeQwQTq4h9rkO_ssl7wARlhG-E8QgrnXa_T7aITLJDXR-9C3oPZrhjp_TNbxzb2IrnfXbqDBl1FsFFszjqOGNmkeQmTAg8LKbx_p03nZRXyOKSWY',
    time: '5 Min Lectura',
    title: 'Manejo del Estrés',
    description: 'Técnicas prácticas y basadas en evidencia para reducir la carga alostática y recuperar la calma en situaciones de alta presión.',
  },
  {
    alt: 'Cozy bedroom setting with soft natural light promoting healthy sleep hygiene',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY6GS9ixrtWLA2subV8k2yRWBCi8mlZTb8r_vBqCCTjwLhGkPoKeHMDQSLPNELNmGgfky5A4i_cb6kNa1x-2xjaky21y9qHITHfHXLROb7U962ASin8n3sxxd94rC82GDU9cOVhi8Nd4hN8hxZtZHnmnAJMwCwXv9IaCuRqCipO4_nn7Z4pGCommtGlieFybIYbg_i_-DLd0d8iP3RNQ1-5TuoFLs9nIpyTK8-MKmtELF3pbemvdlSvsHdGm5xFplAyog_0DA43iU',
    time: '7 Min Lectura',
    title: 'Higiene del Sueño',
    description: 'Rutinas esenciales y ajustes ambientales para combatir el insomnio y asegurar un descanso profundo y reparador.',
  },
];

export default function EducationContainer() {
  return (
    <>
      <section className='py-xl bg-surface px-8'>
        <div className='max-w-container-max mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-end mb-lg'>
            <div className='max-w-2xl'>
              <h2 className='font-headline-lg text-headline-lg text-on-surface mb-base'>Psico-Educación</h2>
              <p className='font-body-md text-body-md text-on-surface-variant'>
                Recursos y conocimientos para empoderarte en la gestión diaria de tu salud mental.
              </p>
            </div>
            <button className='text-primary-container font-label-caps label-caps flex items-center gap-xs mt-sm md:mt-0 hover:text-surface-tint cursor-pointer'>
              Ver Todos
              <span className='material-symbols-outlined text-sm'>arrow_forward</span>
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-gutter'>
            {articles.map((article, index) => (
              <EducationCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
