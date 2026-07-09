export default function ContactContainer() {
  return (
    <>
      <section className='py-xl px-6 max-w-container-max mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-xl'>
          <div className='lg:col-span-5 space-y-lg'>
            <div className='bg-surface-container-lowest rounded-xl p-lg indigo-shadow-1 border border-surface-variant'>
              <h2 className='font-headline-lg text-headline-lg text-primary mb-lg'>Información</h2>
              <div className='space-y-md'>
                <div className='flex items-start gap-md'>
                  <span className='material-symbols-outlined text-secondary text-[24px]'>location_on</span>
                  <div>
                    <p className='font-label-caps label-caps text-secondary mb-xs uppercase'>Dirección</p>
                    <p className='font-body-md text-body-md text-on-surface'>
                      Calle Jorge Juan N33-68 y Av. Atahualpa
                      <br />
                      170147 Quito, Ecuador
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-md'>
                  <span className='material-symbols-outlined text-secondary text-[24px]'>call</span>
                  <div>
                    <p className='font-label-caps label-caps text-secondary mb-xs uppercase'>Teléfono</p>
                    <p className='font-body-md text-body-md text-on-surface'>+593 998964126</p>
                  </div>
                </div>
                <div className='flex items-start gap-md'>
                  <span className='material-symbols-outlined text-secondary text-[24px]'>mail</span>
                  <div>
                    <p className='font-label-caps label-caps text-secondary mb-xs uppercase'>Correo Electrónico</p>
                    <p className='font-body-md text-body-md text-on-surface'>psiquimed20@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-surface-container-low rounded-xl p-lg indigo-shadow-1 border border-surface-variant'>
              <h2 className='font-headline-md text-headline-md text-primary mb-md'>Horarios de Atención</h2>
              <ul className='space-y-sm font-body-md text-body-md text-on-surface-variant'>
                <li className='flex justify-between border-b border-surface-variant pb-xs'>
                  <span>Lunes</span>
                  <span className='font-semibold'>09:00 - 20:00</span>
                </li>
                <li className='flex justify-between border-b border-surface-variant pb-xs'>
                  <span>Martes</span>
                  <span className='font-semibold'>09:00 - 20:00</span>
                </li>
                <li className='flex justify-between border-b border-surface-variant pb-xs'>
                  <span>Miércoles</span>
                  <span className='font-semibold'>09:00 - 17:00</span>
                </li>
                <li className='flex justify-between border-b border-surface-variant pb-xs'>
                  <span>Jueves</span>
                  <span className='font-semibold'>09:00 - 20:00</span>
                </li>
                <li className='flex justify-between border-b border-surface-variant pb-xs'>
                  <span>Viernes</span>
                  <span className='font-semibold'>09:00 - 19:00</span>
                </li>
                <li className='flex justify-between border-b border-surface-variant pb-xs'>
                  <span>Sábados</span>
                  <span className='font-semibold'>10:00 - 13:00</span>
                </li>
                <li className='flex justify-between text-outline'>
                  <span>Domingos</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='lg:col-span-7'>
            <div className='bg-surface-container-lowest rounded-xl p-lg indigo-shadow-2 border border-surface-variant'>
              <h2 className='font-headline-lg text-headline-lg text-primary mb-lg'>Envíanos un Mensaje</h2>
              <form className='space-y-md'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-md'>
                  <div>
                    <label className='block font-label-caps label-caps text-on-surface-variant mb-xs'>Nombre Completo</label>
                    <input
                      className='w-full rounded-lg border-outline-variant bg-surface-bright focus:border-primary-container focus:ring focus:ring-primary-container/20 font-body-md text-body-md px-4 py-3 transition-colors'
                      placeholder='Tu nombre'
                      type='text'
                    />
                  </div>
                  <div>
                    <label className='block font-label-caps label-caps text-on-surface-variant mb-xs'>Correo Electrónico</label>
                    <input
                      className='w-full rounded-lg border-outline-variant bg-surface-bright focus:border-primary-container focus:ring focus:ring-primary-container/20 font-body-md text-body-md px-4 py-3 transition-colors'
                      placeholder='tu@email.com'
                      type='email'
                    />
                  </div>
                </div>
                <div>
                  <label className='block font-label-caps label-caps text-on-surface-variant mb-xs'>Asunto</label>
                  <input
                    className='w-full rounded-lg border-outline-variant bg-surface-bright focus:border-primary-container focus:ring focus:ring-primary-container/20 font-body-md text-body-md px-4 py-3 transition-colors'
                    placeholder='¿En qué podemos ayudarte?'
                    type='text'
                  />
                </div>
                <div>
                  <label className='block font-label-caps label-caps text-on-surface-variant mb-xs'>Mensaje</label>
                  <textarea
                    className='w-full rounded-lg border-outline-variant bg-surface-bright focus:border-primary-container focus:ring focus:ring-primary-container/20 font-body-md text-body-md px-4 py-3 transition-colors resize-none'
                    placeholder='Escribe tu mensaje aquí...'
                    rows='5'
                  ></textarea>
                </div>
                <button
                  className='w-full bg-primary-container text-on-primary font-headline-md text-[18px] py-4 rounded-lg hover:bg-primary transition-colors indigo-shadow-2 flex justify-center items-center gap-2'
                  type='button'
                >
                  <span>Enviar Mensaje</span>
                  <span className='material-symbols-outlined text-[20px]'>send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
