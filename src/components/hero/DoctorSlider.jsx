import DoctorCard from '../cards/DoctorCard';

const doctores = [
  {
    nombre: 'Dra. Elena Ruiz',
    especialidad: 'Psiquiatra Clínica',
    especialidadAmpliada: 'Especialista en Ansiedad, Depresión y Trastornos del Estado de Ánimo.',
    srcImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKTPZTY0PS5yoM_DxHGdz2GaW_fvL3b0qkjOp_VuDJ6NEr3vX_Zzkdfc9hYHRn0s_BOjjlZInLzU4T-QCfdaBCIbT1Wqb_PgxVcfY54TNBuJ-lBDqxuQa433WNKYbZBVf0nrEmilN4VQTzZzA0thIcIuBP_TBtXnrNBgF8R6aSOfG7sQIqweViKyag-pzK39ipBUgeGXt2VLt_6P5sy26Aogb7SMj8BBAKd2zCQwua6OnORKQbGEP5uXsCDFzAaPCUkpcuoMIOEV8',
    alt: 'Dra. Elena Ruiz',
  },
  {
    nombre: 'Dr. Carlos Silva',
    especialidad: 'Psicoterapeuta',
    especialidadAmpliada: 'Especialista en Terapia Cognitivo-Conductual y Manejo del Trauma.',
    srcImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9PDCrqP56D_4YgMmLiOABVDEROqRJ0T3IE4LlnQMYasvUrdWV77C0XNXvPJjP1L-8DB76cKoTagnI1CSSNlGhG4Lps9bVZB2DZxTgqLg4C1Elo3izY3XZPqp54Olt8Kb3OyH10waiHcacL7TMAeBiO1RwnAovZ9X9Lz6PTa3czJIs1IuCTr2seG8cBEfyjz8q46wFo4d6WbOxtI1NkC-08hH2S4Q_8SLOjRUIWfQmFcUmx08d2WwLkvmTJ_iNkAIMq5ABi7uy0a4',
    alt: 'Dr. Carlos Silva',
  },
  {
    nombre: 'Lic. Ana Gómez',
    especialidad: 'Psicóloga Clínica',
    especialidadAmpliada: 'Especialista en Terapia de Pareja y Dinámicas Familiares.',
    srcImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbQW9E_ZuA6t7XanPgmy0Tavrc4Z61UcADFfNvtfriiMAdhj2Hx4Sq9AX5KI4WfkZma4KS3i34i1RjIUdmGN4P2CdE6TUYPYv5RN7RyW2JqqI-m7s7FJjvKYzOWu5EoMWPUEp2fqqw6wZGvNlhpjBgGL0ufmc8QAB6sXPhTg7-J44gjHGLbg0Q8Yds0s5Zdvr6rSgRXrLZdmjtEnOUXDopD6VD_84LiDEtRHQtqSD7xaeVN1_DlKIvbiJGQm9l0Cbaatpiu7MK2r0',
    alt: 'Lic. Ana Gómez',
  },
  {
    nombre: 'Dr. Luis Medina',
    especialidad: 'Neuropsiquiatra',
    especialidadAmpliada: 'Especialista en Trastornos del Neurodesarrollo y Evaluación Cognitiva.',
    srcImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDlGomRYURdwyLP7Iu802AtMPPFFi00xo5uJUKRA373njqI8Jgns0HqCwVsLk8Gtt-AtOU048KYcotk2rJkMhgXrUxCu-A_zKPTtt8o_VmUeShIztYnukFu0_o9hPRFjBNqZ3h1tCffaiyB_geDTS0z-fRczuYTw-XZa1ZYdZfPS-07l0shbLkNScMUzvw_DaY0E9aQEv-0f-0GOTxari6mtnL-N_OzFfm-OgGqpexF8ei1mwTjorB_71bUiR1MNkK69JpilNeKga8',
    alt: 'Dr. Luis Medina',
  },
];

export default function DoctorSlider() {
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
          {doctores.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
