export default function DashNavbar() {
  return (
    <>
      <nav className='hidden md:flex bg-white  h-screen w-64 border-r border-slate-200  flex-col py-6 fixed left-0 top-0 z-40'>
        <div className='px-6 mb-8 flex flex-col gap-2'>
          <span className='text-lg font-extrabold text-violet-950 font-headline-md'>Gestión</span>
          <span className='text-xs text-slate-500 uppercase tracking-wider'>Clinical Adminitración&nbsp; Portal</span>
        </div>
        <div className='px-6 mb-8'>
          <button className='w-full bg-primary-container text-white py-3 rounded-lg font-headline-md text-sm font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-[0_2px_4px_rgba(57,20,148,0.1)]'>
            <span className='material-symbols-outlined text-sm'>add</span>
            Nueva entrada
          </button>
        </div>
        <ul className='flex flex-col flex-grow w-full'>
          <li className='w-full'>
            <a
              className='flex items-center gap-3 px-6 py-3 text-violet-950 bg-violet-50  font-semibold border-r-4 border-violet-950  font-manrope text-sm duration-200 ease-in-out w-full'
              href='#'
            >
              <span className='material-symbols-outlined'>dashboard</span>
              Dashboard
            </a>
          </li>
          <li className='w-full'>
            <a
              className='flex items-center gap-3 px-6 py-3 text-slate-600  hover:text-violet-800   \ font-manrope text-sm duration-200 ease-in-out w-full transition-colors'
              href='#'
            >
              <span className='material-symbols-outlined'>medical_services</span>
              Doctores
            </a>
          </li>
          <li className='w-full'>
            <a
              className='flex items-center gap-3 px-6 py-3 text-slate-600     font-manrope text-sm duration-200 ease-in-out w-full transition-colors'
              href='#'
            >
              <span className='material-symbols-outlined'>article</span>
              Artículos
            </a>
          </li>
          <li className='w-full'>
            <a
              className='flex items-center gap-3 px-6 py-3 text-slate-600  hover:text-violet-800    font-manrope text-sm duration-200 ease-in-out w-full transition-colors'
              href='#'
            >
              <span className='material-symbols-outlined'>medical_information</span>
              Servicios
            </a>
          </li>
          <li className='w-full'>
            <a
              className='flex items-center gap-3 px-6 py-3 text-slate-600  hover:text-violet-800    font-manrope text-sm duration-200 ease-in-out w-full transition-colors'
              href='#'
            >
              <span className='material-symbols-outlined'>contact_support</span>General
            </a>
          </li>
        </ul>
        <div className='mt-auto w-full border-t border-slate-200  pt-4'>
          <a
            className='flex items-center gap-3 px-6 py-3 text-slate-600  hover:text-violet-800    font-manrope text-sm duration-200 ease-in-out w-full transition-colors'
            href='#'
          >
            <span className='material-symbols-outlined'>logout</span>
            Logout
          </a>
        </div>
      </nav>
      <main className='flex-1 md:ml-64 flex flex-col h-screen overflow-y-auto bg-surface-container-lowest'>
        <header className='bg-white  border-b border-slate-200  shadow-[0_2px_4px_rgba(57,20,148,0.05)] sticky top-0 z-30 flex items-center justify-between px-6 py-3 w-full'>
          <div className='flex items-center gap-4'>
            <button className='md:hidden text-violet-950  p-2 hover:bg-slate-50  transition-colors rounded-full active:scale-95 transition-transform'>
              <span className='material-symbols-outlined'>menu</span>
            </button>
            <h1 className='text-xl font-bold text-violet-950 font-headline-md md:hidden'>Psiquimed CMS</h1>
            <div className='hidden md:flex items-center bg-surface-container-low rounded-full px-4 py-2 border border-slate-200 focus-within:border-primary-container focus-within:ring-1 focus-within:ring-primary-container transition-all'>
              <span className='material-symbols-outlined text-outline mr-2 text-sm'>search</span>
              <input
                className='bg-transparent border-none focus:ring-0 text-sm font-manrope text-on-surface placeholder:text-outline w-64 outline-none'
                placeholder='buscar...'
                type='text'
              />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <button className='p-2 text-slate-500 hover:bg-slate-50  transition-colors rounded-full active:scale-95 transition-transform'>
              <span className='material-symbols-outlined'>notifications</span>
            </button>
            <button className='p-2 text-slate-500 hover:bg-slate-50  transition-colors rounded-full active:scale-95 transition-transform'>
              <span className='material-symbols-outlined'>settings</span>
            </button>
            <div className='w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center font-bold text-sm ml-2 shadow-[0_2px_4px_rgba(57,20,148,0.05)] overflow-hidden'>
              <img
                alt='Administrator profile photo'
                className='w-full h-full object-cover'
                data-alt='professional corporate headshot of a smiling man in a soft lit office setting'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuAWgwuICVwVXcGk96McLqXJKc3IM_drXBM6jymduGBnZRFY8i7n3jqME5VQnputLrDA9VthcLykGAQJEnfdnz1NqAb__MIQjDKRsvuIKGJIWYH1Tjh5Nz4PUY-OCxIXB9CMbYn77Ts_GEQo2OiRqwAIQ4AIqt9ju1fQ4OlKoE7JXxp7911DQhXikTjZYg1tbeyg9MOBvOkgPl-OZ-D3fra4DeJma-_34AxZPZigKICJg0P1cVY2j-5SpojUShfmONAZm4xEukyJOZc'
              />
            </div>
          </div>
        </header>
      </main>
    </>
  );
}
