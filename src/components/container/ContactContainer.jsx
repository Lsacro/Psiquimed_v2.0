export default function ContactContainer() {
  const horarios = [
    { dia: 'Lunes', horario: '09:00 - 20:00' },
    { dia: 'Martes', horario: '09:00 - 20:00' },
    { dia: 'Miércoles', horario: '09:00 - 17:00' },
    { dia: 'Jueves', horario: '09:00 - 20:00' },
    { dia: 'Viernes', horario: '09:00 - 19:00' },
    { dia: 'Sábados', horario: '10:00 - 13:00' },
  ];

  return (
    <section className='py-xl px-6 max-w-container-max mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-xl'>
        {/* Información de contacto */}
        <div className='lg:col-span-6'>
          <div className='bg-surface-container-lowest rounded-xl p-lg indigo-shadow-1 border border-surface-variant h-full'>
            <h2 className='font-headline-lg text-headline-lg text-primary mb-lg'>Información</h2>

            <div className='space-y-md'>
              {/* Dirección */}
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

              {/* Teléfono */}
              <div className='flex items-start gap-md'>
                <span className='material-symbols-outlined text-secondary text-[24px]'>call</span>

                <div>
                  <p className='font-label-caps label-caps text-secondary mb-xs uppercase'>Teléfono</p>

                  <p className='font-body-md text-body-md text-on-surface'>+593 99 896 4126</p>
                </div>
              </div>

              {/* Correo */}
              <div className='flex items-start gap-md'>
                <span className='material-symbols-outlined text-secondary text-[24px]'>mail</span>

                <div>
                  <p className='font-label-caps label-caps text-secondary mb-xs uppercase'>Correo Electrónico</p>

                  <p className='font-body-md text-body-md text-on-surface'>psiquimed20@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horarios */}
        <div className='lg:col-span-6'>
          <div className='bg-surface-container-low rounded-xl p-lg indigo-shadow-1 border border-surface-variant h-full'>
            <h2 className='font-headline-md text-headline-md text-primary mb-md'>Horarios de Atención</h2>

            <ul className='space-y-sm font-body-md text-body-md text-on-surface-variant'>
              {horarios.map((item) => (
                <li key={item.dia} className='flex justify-between border-b border-surface-variant pb-xs'>
                  <span>{item.dia}</span>

                  <span className='font-semibold'>{item.horario}</span>
                </li>
              ))}

              <li className='flex justify-between text-outline'>
                <span>Domingos</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
