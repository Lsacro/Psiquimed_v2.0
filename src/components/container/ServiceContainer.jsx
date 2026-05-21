export default function ServiceContainer() {
  return (
    <>
      <section class='py-xl px-6 bg-background'>
        <div class='max-w-[1200px] mx-auto'>
          <div class='text-center mb-16'>
            <h2 class='font-headline-lg text-headline-lg text-on-surface mb-4'>Soluciones para tu bienestar</h2>
            <p class='font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto'>
              Enfoques terapéuticos diseñados a la medida de tus necesidades, guiados por especialistas en salud mental.
            </p>
          </div>
          <div class='grid grid-cols-1 md:grid-cols-3 gap-md'>
            <div class='bg-surface-container-lowest rounded-xl p-md border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 group flex flex-col h-full'>
              <div class='w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-on-primary transition-colors'>
                <span class='material-symbols-outlined' data-icon='person'>
                  person
                </span>
              </div>
              <h3 class='font-headline-md text-headline-md text-on-surface mb-3'>Terapia Individual</h3>
              <p class='font-body-md text-body-md text-on-surface-variant mb-6 flex-grow'>
                Un espacio seguro para explorar tus emociones, gestionar la ansiedad y trabajar en tu crecimiento personal.
              </p>
              <a class='text-primary-container font-body-md font-medium flex items-center hover:text-primary mt-auto' href='#'>
                Saber más{' '}
                <span class='material-symbols-outlined ml-1 text-sm' data-icon='arrow_forward'>
                  arrow_forward
                </span>
              </a>
            </div>
            <div class='bg-surface-container-lowest rounded-xl p-md border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 group flex flex-col h-full'>
              <div class='w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors'>
                <span class='material-symbols-outlined' data-icon='favorite'>
                  favorite
                </span>
              </div>
              <h3 class='font-headline-md text-headline-md text-on-surface mb-3'>Terapia de Pareja</h3>
              <p class='font-body-md text-body-md text-on-surface-variant mb-6 flex-grow'>
                Mejora la comunicación, resuelve conflictos y fortalece el vínculo afectivo con herramientas prácticas.
              </p>
              <a class='text-primary-container font-body-md font-medium flex items-center hover:text-primary mt-auto' href='#'>
                Saber más{' '}
                <span class='material-symbols-outlined ml-1 text-sm' data-icon='arrow_forward'>
                  arrow_forward
                </span>
              </a>
            </div>
            <div class='bg-surface-container-lowest rounded-xl p-md border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 group flex flex-col h-full'>
              <div class='w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-on-primary transition-colors'>
                <span class='material-symbols-outlined' data-icon='medical_services'>
                  medical_services
                </span>
              </div>
              <h3 class='font-headline-md text-headline-md text-on-surface mb-3'>Psiquiatría</h3>
              <p class='font-body-md text-body-md text-on-surface-variant mb-6 flex-grow'>
                Evaluación médica integral y manejo farmacológico para trastornos del estado de ánimo, ansiedad y más.
              </p>
              <button class='w-full bg-surface-variant text-on-surface hover:bg-outline-variant py-2 rounded-lg font-body-md font-medium transition-colors mt-auto'>
                Agendar Consulta
              </button>
            </div>
            <div class='bg-surface-container-lowest rounded-xl p-md border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 md:col-span-2 group flex flex-col md:flex-row items-center gap-6 h-full'>
              <div class='w-full md:w-1/3 h-48 md:h-full rounded-lg overflow-hidden bg-surface-container'>
                <img
                  alt='Evaluación cognitiva'
                  class='w-full h-full object-cover opacity-80'
                  data-alt='Doctor discussing brain scans with patient in a modern clinical setting, soft blue and white lighting, professional focus'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuBhSUQxYSP1bXVnTBIEfFTCdgejqeQBSyK4-7rFrF9Qk3xMqqAso5E4SMJ3htCVj97Pu66Bu0tw_dzEpNMtq8xdguR_gCaKWQtOJw-Vov348obY6qqo7WX7rOCZuO25an5Oc02BvTIl8TfAZ2hgh7VIzLwqSOXBZzRyy9QFFLvZYnNSBujVx_yR1uAJM07L46FfXIlLXYoVcn19X-GBwK2SllHv6Ba2IAbLAwXeyWS5_wTki9MyvToDtHi7f4OQsuD_brfS3g1MtLg'
                />
              </div>
              <div class='w-full md:w-2/3 flex flex-col flex-grow'>
                <div class='w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container mb-4'>
                  <span class='material-symbols-outlined' data-icon='psychology'>
                    psychology
                  </span>
                </div>
                <h3 class='font-headline-md text-headline-md text-on-surface mb-2'>Neuropsicología</h3>
                <p class='font-body-md text-body-md text-on-surface-variant mb-6 flex-grow'>
                  Evaluación detallada de las funciones cognitivas (memoria, atención, lenguaje) para diagnóstico y rehabilitación neuropsicológica.
                </p>
                <a class='text-primary-container font-body-md font-medium flex items-center hover:text-primary mt-auto' href='#'>
                  Saber más{' '}
                  <span class='material-symbols-outlined ml-1 text-sm' data-icon='arrow_forward'>
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div class='flex flex-col gap-md h-full'>
              <div class='bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 flex-1'>
                <div class='flex items-center gap-4 mb-3'>
                  <div class='w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary'>
                    <span class='material-symbols-outlined' data-icon='family_restroom'>
                      family_restroom
                    </span>
                  </div>
                  <h3 class='font-headline-md text-[20px] font-semibold text-on-surface'>Adolescentes</h3>
                </div>
                <p class='font-body-md text-sm text-on-surface-variant mb-4'>
                  Acompañamiento especializado en los desafíos emocionales de la juventud.
                </p>
                <a class='text-primary-container text-sm font-medium hover:text-primary' href='#'>
                  Saber más
                </a>
              </div>

              <div class='bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/20 shadow-[0_2px_10px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_30px_rgba(57,20,148,0.08)] transition-all duration-300 flex-1'>
                <div class='flex items-center gap-4 mb-3'>
                  <div class='w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container'>
                    <span class='material-symbols-outlined' data-icon='groups'>
                      groups
                    </span>
                  </div>
                  <h3 class='font-headline-md text-[20px] font-semibold text-on-surface'>Talleres</h3>
                </div>
                <p class='font-body-md text-sm text-on-surface-variant mb-4'>
                  Sesiones grupales de psicoeducación para el manejo del estrés y la ansiedad.
                </p>
                <a class='text-primary-container text-sm font-medium hover:text-primary' href='#'>
                  Ver calendario
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
