export default function HeroEducation() {
  return (
    <>
      <section className='relative pt-xl pb-lg px-6 overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            alt='Hero background'
            className='w-full h-full object-cover opacity-20'
            data-alt='Serene landscape with soft morning light, calm water and gentle mountains in background, creating a peaceful and thoughtful atmosphere'
            src='https://lh3.googleusercontent.com/aida-public/AB6AXuCMF_tn_o1elPB84cebvRlYwsToSae7lZgMnNDQQ8ywsxtj611EPIwuJ7nAmf9j96E5d1d0d2r6iCPvW4z0HH3JMpEN3aLyvXMjcQl2aQulNmCzSaH8r9xa8irQTfMnqkgSOKODS4ua-S2qUQRkBEGYQZ0aCrKG3ImzAlQwtGmM05vu7DkQ5Ca62u6cuEoXSSTcjjYAhCuGrwDqN3HP4-5VFHbYATlxB0pgTUsGT-XJERIkfai8KLju92a0wm7xR6Pv_dkZDG8-doA'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 to-background'></div>
        </div>
        <div className='max-w-container-max mx-auto relative z-10 text-center'>
          <h1 className='font-headline-xl text-headline-xl text-primary mb-sm'>Psico-Educación</h1>
          <p className='font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto'>
            Comprender la mente es el primer paso hacia el bienestar. Explora nuestros recursos educativos diseñados para brindarte claridad,
            herramientas prácticas y un mayor entendimiento de tu salud mental.
          </p>
        </div>
      </section>
    </>
  );
}
