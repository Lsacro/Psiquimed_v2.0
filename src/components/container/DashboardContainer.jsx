export default function DashboardContainer() {
  return (
    <>
      <div className='p-gutter md:p-lg max-w-container-max mx-auto w-full'>
        <div className='flex justify-between items-end mb-md'>
          <div>
            <h2 className='font-headline-lg text-headline-lg text-primary-container mb-xs'>Bienvenido, Admin</h2>
            <p className='font-body-md text-body-md text-on-surface-variant'>Aquí está un resumen de tu empresa</p>
          </div>
          <div className='hidden md:flex gap-2'>
            <button className='px-4 py-2 rounded-lg border border-primary-container text-primary-container font-headline-md text-sm font-semibold hover:bg-primary-fixed transition-colors'>
              Export Report
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-gutter mb-lg'>
          <div className='bg-surface-container-lowest p-md rounded-xl border border-surface-variant shadow-[0_2px_4px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_20px_rgba(57,20,148,0.08)] transition-all duration-300 relative overflow-hidden group'>
            <div className='absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed rounded-full opacity-50 group-hover:scale-110 transition-transform'></div>
            <div className='flex justify-between items-start mb-4 relative z-10'>
              <div className='p-2 bg-primary-container rounded-lg text-white'>
                <span className='material-symbols-outlined'>medical_services</span>
              </div>
              <span className='bg-surface-container-high px-2 py-1 rounded-full text-xs font-semibold text-primary-container flex items-center gap-1'>
                <span className='material-symbols-outlined text-[10px]'>arrow_upward</span> 12%
              </span>
            </div>
            <div className='relative z-10'>
              <p className='font-label-caps text-label-caps text-outline mb-1'>DOCTORES TOTALES</p>
              <h3 className='font-headline-xl text-headline-xl text-on-surface'>42</h3>
            </div>
          </div>
          <div className='bg-surface-container-lowest p-md rounded-xl border border-surface-variant shadow-[0_2px_4px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_20px_rgba(57,20,148,0.08)] transition-all duration-300 relative overflow-hidden group'>
            <div className='absolute -right-4 -top-4 w-24 h-24 bg-secondary-container rounded-full opacity-50 group-hover:scale-110 transition-transform'></div>
            <div className='flex justify-between items-start mb-4 relative z-10'>
              <div className='p-2 bg-secondary text-white rounded-lg'>
                <span className='material-symbols-outlined'>article</span>
              </div>
              <span className='bg-surface-container-high px-2 py-1 rounded-full text-xs font-semibold text-primary-container flex items-center gap-1'>
                <span className='material-symbols-outlined text-[10px]'>arrow_upward</span> 8%
              </span>
            </div>
            <div className='relative z-10'>
              <p className='font-label-caps text-label-caps text-outline mb-1'>ARTÍCULOS PUBLICADOS</p>
              <h3 className='font-headline-xl text-headline-xl text-on-surface'>156</h3>
            </div>
          </div>
          <div className='bg-surface-container-lowest p-md rounded-xl border border-surface-variant shadow-[0_2px_4px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_20px_rgba(57,20,148,0.08)] transition-all duration-300 relative overflow-hidden group'>
            <div className='absolute -right-4 -top-4 w-24 h-24 bg-tertiary-fixed rounded-full opacity-50 group-hover:scale-110 transition-transform'></div>
            <div className='flex justify-between items-start mb-4 relative z-10'>
              <div className='p-2 bg-tertiary text-white rounded-lg'>
                <span className='material-symbols-outlined'>medical_information</span>
              </div>
              <span className='bg-surface-container-high px-2 py-1 rounded-full text-xs font-semibold text-outline flex items-center gap-1'>
                <span className='material-symbols-outlined text-[10px]'>horizontal_rule</span> 0%
              </span>
            </div>
            <div className='relative z-10'>
              <p className='font-label-caps text-label-caps text-outline mb-1'>SERVICOS ACTIVOS</p>
              <h3 className='font-headline-xl text-headline-xl text-on-surface'>24</h3>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-gutter'>
          <div className='lg:col-span-2 bg-surface-container-lowest rounded-xl border border-surface-variant shadow-[0_2px_4px_rgba(57,20,148,0.05)] overflow-hidden'>
            <div className='p-md border-b border-surface-variant flex justify-between items-center'>
              <h3 className='font-headline-md text-headline-md text-on-surface text-lg'>Recent Activity</h3>
              <button className='text-sm font-semibold text-primary-container hover:text-primary transition-colors'>View All</button>
            </div>
            <div className='p-0'>
              <ul className='divide-y divide-surface-variant'>
                <li className='p-4 hover:bg-surface-container-low transition-colors flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0 mt-1'>
                    <span className='material-symbols-outlined text-sm'>edit_document</span>
                  </div>
                  <div className='flex-1'>
                    <p className='font-body-md text-body-md text-on-surface'>
                      <span className='font-semibold'>Dr. Sarah Jenkins</span> updated the article "Managing Anxiety in Modern Workplaces"
                    </p>
                    <p className='font-label-caps text-label-caps text-outline mt-1'>2 HOURS AGO</p>
                  </div>
                </li>
                <li className='p-4 hover:bg-surface-container-low transition-colors flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary flex-shrink-0 mt-1'>
                    <span className='material-symbols-outlined text-sm'>person_add</span>
                  </div>
                  <div className='flex-1'>
                    <p className='font-body-md text-body-md text-on-surface'>
                      New doctor profile added: <span className='font-semibold'>Dr. Michael Chen, Psychiatrist</span>
                    </p>
                    <p className='font-label-caps text-label-caps text-outline mt-1'>5 HOURS AGO</p>
                  </div>
                </li>
                <li className='p-4 hover:bg-surface-container-low transition-colors flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary flex-shrink-0 mt-1'>
                    <span className='material-symbols-outlined text-sm'>settings_suggest</span>
                  </div>
                  <div className='flex-1'>
                    <p className='font-body-md text-body-md text-on-surface'>
                      Service "Cognitive Behavioral Therapy" details were modified by <span className='font-semibold'>Admin</span>
                    </p>
                    <p className='font-label-caps text-label-caps text-outline mt-1'>YESTERDAY</p>
                  </div>
                </li>
                <li className='p-4 hover:bg-surface-container-low transition-colors flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-outline flex-shrink-0 mt-1'>
                    <span className='material-symbols-outlined text-sm'>delete</span>
                  </div>
                  <div className='flex-1'>
                    <p className='font-body-md text-body-md text-on-surface'>Draft article "Sleep Hygiene Basics" was deleted</p>
                    <p className='font-label-caps text-label-caps text-outline mt-1'>YESTERDAY</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col gap-gutter'>
            <div className='bg-surface-container-lowest p-md rounded-xl border border-surface-variant shadow-[0_2px_4px_rgba(57,20,148,0.05)]'>
              <h3 className='font-headline-md text-headline-md text-on-surface text-lg mb-4'>Quick Actions</h3>
              <div className='grid grid-cols-2 gap-3'>
                <button className='p-3 rounded-lg border border-surface-variant hover:border-primary-container hover:bg-primary-fixed transition-all flex flex-col items-center gap-2 text-center group'>
                  <span className='material-symbols-outlined text-outline group-hover:text-primary-container transition-colors'>person_add</span>
                  <span className='font-headline-md text-xs font-semibold text-on-surface-variant group-hover:text-primary-container transition-colors'>
                    Add Doctor
                  </span>
                </button>
                <button className='p-3 rounded-lg border border-surface-variant hover:border-secondary hover:bg-secondary-fixed-dim transition-all flex flex-col items-center gap-2 text-center group'>
                  <span className='material-symbols-outlined text-outline group-hover:text-secondary transition-colors'>post_add</span>
                  <span className='font-headline-md text-xs font-semibold text-on-surface-variant group-hover:text-secondary transition-colors'>
                    Write Article
                  </span>
                </button>
                <button className='p-3 rounded-lg border border-surface-variant hover:border-tertiary hover:bg-tertiary-fixed transition-all flex flex-col items-center gap-2 text-center group'>
                  <span className='material-symbols-outlined text-outline group-hover:text-tertiary transition-colors'>add_box</span>
                  <span className='font-headline-md text-xs font-semibold text-on-surface-variant group-hover:text-tertiary transition-colors'>
                    Add Service
                  </span>
                </button>
                <button className='p-3 rounded-lg border border-surface-variant hover:border-primary hover:bg-surface-container-low transition-all flex flex-col items-center gap-2 text-center group'>
                  <span className='material-symbols-outlined text-outline group-hover:text-primary transition-colors'>upload_file</span>
                  <span className='font-headline-md text-xs font-semibold text-on-surface-variant group-hover:text-primary transition-colors'>
                    Upload Media
                  </span>
                </button>
              </div>
            </div>
            <div className='bg-surface-container-lowest p-md rounded-xl border border-error-container shadow-[0_2px_4px_rgba(57,20,148,0.05)] flex-1'>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='font-headline-md text-headline-md text-on-surface text-lg'>Needs Attention</h3>
                <span className='bg-error-container text-error px-2 py-1 rounded text-xs font-bold'>2 Pending</span>
              </div>
              <ul className='space-y-3'>
                <li className='p-3 rounded-lg bg-surface-container-low border border-surface-variant flex justify-between items-center'>
                  <div>
                    <p className='font-headline-md text-sm font-semibold text-on-surface'>Article Review</p>
                    <p className='font-body-md text-xs text-on-surface-variant'>"Understanding PTSD"</p>
                  </div>
                  <button className='text-primary-container font-semibold text-sm hover:underline'>Review</button>
                </li>
                <li className='p-3 rounded-lg bg-surface-container-low border border-surface-variant flex justify-between items-center'>
                  <div>
                    <p className='font-headline-md text-sm font-semibold text-on-surface'>Profile Update</p>
                    <p className='font-body-md text-xs text-on-surface-variant'>Dr. Alan Turing</p>
                  </div>
                  <button className='text-primary-container font-semibold text-sm hover:underline'>Review</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='h-xl'></div>
      </div>
    </>
  );
}
