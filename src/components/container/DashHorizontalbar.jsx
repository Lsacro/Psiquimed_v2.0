export default function DashHorizontalbar() {
  return (
    <>
      <header className='bg-white  border-b border-slate-200  shadow-[0_2px_4px_rgba(57,20,148,0.05)] sticky top-0 z-30 flex items-center justify-between px-6 py-3 w-full'>
        <div className='flex items-center gap-4'>
          {/* <!-- Mobile Menu Button --> */}
          <button className='md:hidden text-violet-950  p-2 hover:bg-slate-50  transition-colors rounded-full active:scale-95 transition-transform'>
            <span className='material-symbols-outlined'>menu</span>
          </button>
          <h1 className='text-xl font-bold text-violet-950  font-headline-md md:hidden'>Psiquimed CMS</h1>
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
    </>
  );
}
