const Wassap = () => {
  return (
    <>
      <nav class='bg-white/95 95 backdrop-blur-md w-full top-0 z-50 sticky border-b border-slate-100  shadow-[0_2px_15px_-3px_rgba(57,20,148,0.07)] font-manrope antialiased text-[#391494] '>
        <div class='flex justify-between items-center h-20 px-8 max-w-[1200px] mx-auto'>
          <div class='text-2xl font-bold tracking-tight text-[#391494] '>Psiquimed</div>
          <div class='hidden md:flex items-center gap-sm'>
            <a class='text-[#391494]  font-bold border-b-2 border-[#391494] pb-1 hover:bg-slate-50  rounded-lg transition-all'>Home</a>
            <a class='text-slate-600  hover:text-[#391494] hover:bg-slate-50  rounded-lg px-3 py-2 transition-all'>Prefesionales</a>
            <a class='text-slate-600  hover:text-[#391494] hover:bg-slate-50  rounded-lg px-3 py-2 transition-all'>Servicios</a>
            <a class='text-slate-600  hover:text-[#391494] hover:bg-slate-50  rounded-lg px-3 py-2 transition-all'>Educación</a>
            <a class='text-slate-600  hover:text-[#391494] hover:bg-slate-50  rounded-lg px-3 py-2 transition-all'>Contacto</a>
          </div>
          <div class='flex items-center gap-md'>
            <button class='bg-primary text-on-primary px-6 py-2 rounded-lg font-label-caps text-label-caps hover:bg-surface-tint active:scale-95 duration-150 ease-in-out'>
              Agenda una cita
            </button>
            <button aria-label='chat' class='text-[#391494]  hover:bg-slate-50  rounded-lg p-2 active:scale-95 duration-150 ease-in-out'>
              <span class='material-symbols-outlined'>chat</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Wassap;
