import ServiceCard from '../cards/ServiceCard';

const services = [
  {
    icon: 'psychology',
    title: 'Terapia Individual',
    description: 'Espacio seguro y confidencial para explorar emociones, superar bloqueos y desarrollar herramientas de afrontamiento personal.',
  },
  {
    icon: 'diversity_1',
    title: 'Terapia de Pareja',
    description: 'Intervención enfocada en mejorar la comunicación, resolver conflictos y fortalecer el vínculo afectivo en la relación.',
  },
  {
    icon: 'medical_services',
    title: 'Psiquiatría',
    description: 'Evaluación médica especializada, diagnóstico preciso y manejo farmacológico responsable para trastornos mentales.',
  },
];

export default function ServicesContainer() {
  return (
    <section className='py-xl bg-surface-container-low px-8'>
      <div className='max-w-container-max mx-auto'>
        <div className='text-center mb-lg'>
          <h2 className='font-headline-lg text-headline-lg text-on-surface mb-base'>Nuestros Servicios</h2>
          <p className='font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto'>
            Enfoques terapéuticos diseñados para restaurar el equilibrio y promover el bienestar integral.
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
