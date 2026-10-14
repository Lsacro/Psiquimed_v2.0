export default function PrivacyPolitics() {
  return (
    <>
      <main class='flex-1 max-w-7xl w-full mx-auto px-6 lg:px-8 py-10 lg:py-14'>
        {/* <!-- Breadcrumb & Cabecera --> */}
        <div class='mb-10'>
          <div class='flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3'>
            <a href='/' class='hover:text-brand transition-colors'>
              Inicio
            </a>
            <span>/</span>
            <span class='text-slate-600'>Políticas de Privacidad</span>
          </div>

          <div class='flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200'>
            <div>
              <span class='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand mb-3'>
                <span class='material-symbols-outlined text-sm'>verified_user</span>
                Compromiso de Confidencialidad y Secreto Médico
              </span>
              <h1 class='text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight'>Políticas de Privacidad y Custodia de Datos Clínicos</h1>
              <p class='mt-3 text-base text-slate-600 max-w-3xl leading-relaxed'>
                En
                <strong> Psiquimed</strong>, la privacidad, reserva y dignidad de nuestros pacientes constituyen la base fundamental de nuestro
                ejercicio ético y profesional en salud mental.
              </p>
            </div>
            <div class='flex items-center gap-3 self-start lg:self-auto bg-white border border-slate-200/80 px-4 py-2.5 rounded-xl shadow-sm text-xs text-slate-500 shrink-0'>
              <span class='material-symbols-outlined text-brand text-lg'>calendar_today</span>
              <span>
                Última actualización:
                <strong>Octubre 2026</strong>
              </span>
            </div>
          </div>
        </div>

        {/* <!-- Layout 2 Columnas: Índice Navegación Lateral + Contenido Detallado --> */}
        <div class='grid grid-cols-1 lg:grid-cols-12 gap-10 items-start'>
          {/* <!-- Columna Izquierda: Índice Rápido y Resumen Ético --> */}
          <aside class='lg:col-span-4 space-y-6 lg:sticky lg:top-28'>
            {/* <!-- Tarjeta de Navegación Rápida --> */}
            <div class='bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm'>
              <h3 class='text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2'>
                <span class='material-symbols-outlined text-brand text-base'>format_list_bulleted</span>
                Contenido del Documento
              </h3>
              <nav class='space-y-1 text-sm font-medium'>
                <a
                  href='#secreto-profesional'
                  class='flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 hover:bg-brand-soft hover:text-brand transition-colors group'
                >
                  <span>1. Secreto Profesional Médico</span>
                  <span class='material-symbols-outlined text-xs text-slate-400 group-hover:text-brand group-hover:translate-x-0.5 transition-transform'>
                    chevron_right
                  </span>
                </a>
                <a
                  href='#datos-recopilados'
                  class='flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 hover:bg-brand-soft hover:text-brand transition-colors group'
                >
                  <span>2. Datos Clínicos y Personales</span>
                  <span class='material-symbols-outlined text-xs text-slate-400 group-hover:text-brand group-hover:translate-x-0.5 transition-transform'>
                    chevron_right
                  </span>
                </a>
                <a
                  href='#finalidad-tratamiento'
                  class='flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 hover:bg-brand-soft hover:text-brand transition-colors group'
                >
                  <span>3. Finalidad del Tratamiento</span>
                  <span class='material-symbols-outlined text-xs text-slate-400 group-hover:text-brand group-hover:translate-x-0.5 transition-transform'>
                    chevron_right
                  </span>
                </a>
                <a
                  href='#seguridad-custodia'
                  class='flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 hover:bg-brand-soft hover:text-brand transition-colors group'
                >
                  <span>4. Seguridad y Expediente Digital</span>
                  <span class='material-symbols-outlined text-xs text-slate-400 group-hover:text-brand group-hover:translate-x-0.5 transition-transform'>
                    chevron_right
                  </span>
                </a>
                <a
                  href='#teleconsulta'
                  class='flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 hover:bg-brand-soft hover:text-brand transition-colors group'
                >
                  <span>5. Telepsicología y Consultas Online</span>
                  <span class='material-symbols-outlined text-xs text-slate-400 group-hover:text-brand group-hover:translate-x-0.5 transition-transform'>
                    chevron_right
                  </span>
                </a>
                <a
                  href='#derechos-arco'
                  class='flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 hover:bg-brand-soft hover:text-brand transition-colors group'
                >
                  <span>6. Tus Derechos (ARCO)</span>
                  <span class='material-symbols-outlined text-xs text-slate-400 group-hover:text-brand group-hover:translate-x-0.5 transition-transform'>
                    chevron_right
                  </span>
                </a>
                <a
                  href='#contacto-dpo'
                  class='flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 hover:bg-brand-soft hover:text-brand transition-colors group'
                >
                  <span>7. Oficial de Protección de Datos</span>
                  <span class='material-symbols-outlined text-xs text-slate-400 group-hover:text-brand group-hover:translate-x-0.5 transition-transform'>
                    chevron_right
                  </span>
                </a>
              </nav>
            </div>
          </aside>

          {/* <!-- Columna Derecha: Secciones Legales Detalladas --> */}
          <article class='lg:col-span-8 space-y-8 text-slate-700 leading-relaxed'>
            {/* <!-- Sección 1 --> */}
            <section id='secreto-profesional' class='bg-white rounded-2xl p-7 lg:p-9 border border-slate-200/80 shadow-sm scroll-mt-28'>
              <div class='flex items-center gap-3 mb-4'>
                <span class='w-8 h-8 rounded-lg bg-brand-soft text-brand font-bold text-sm flex items-center justify-center'>01</span>
                <h2 class='text-xl font-bold text-slate-900'>Secreto Profesional y Marco Deontológico</h2>
              </div>
              <p class='text-sm text-slate-600 leading-relaxed mb-4'>
                Toda interacción, sesión de psicoterapia, consulta psiquiátrica, registro de notas clínicas y comunicación verbal o escrita efectuada
                en
                <strong> Psiquimed</strong>
                está estrictamente protegida bajo el secreto profesional médico y el código deontológico de los Colegios Profesionales de Psicología y
                Medicina.
              </p>
              <div class='bg-slate-50 border-l-4 border-brand p-4 rounded-r-xl text-xs text-slate-700 space-y-2'>
                <p class='font-bold text-slate-900'>Excepciones contempladas por la ley:</p>
                <p>
                  El secreto profesional únicamente podrá flexibilizarse bajo mandato judicial explícito o en situaciones extraordinarias tipificadas
                  de riesgo inminente y grave para la vida o integridad física del paciente o de terceras personas, actuando siempre bajo el principio
                  de menor revelación indispensable.
                </p>
              </div>
            </section>

            {/* <!-- Sección 2 --> */}
            <section id='datos-recopilados' class='bg-white rounded-2xl p-7 lg:p-9 border border-slate-200/80 shadow-sm scroll-mt-28'>
              <div class='flex items-center gap-3 mb-4'>
                <span class='w-8 h-8 rounded-lg bg-brand-soft text-brand font-bold text-sm flex items-center justify-center'>02</span>
                <h2 class='text-xl font-bold text-slate-900'>Información y Datos que Recopilamos</h2>
              </div>
              <p class='text-sm text-slate-600 leading-relaxed mb-4'>
                Para ofrecer una atención interdisciplinaria de máxima calidad, recopilamos diferentes categorías de información tratadas con el más
                riguroso nivel de resguardo:
              </p>
              <div class='grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs'>
                <div class='p-4 rounded-xl border border-slate-100 bg-slate-50/70'>
                  <span class='material-symbols-outlined text-brand text-lg mb-1'>badge</span>
                  <h3 class='font-bold text-slate-900 text-sm mb-1'>Datos Identificativos</h3>
                  <p class='text-slate-600'>
                    Nombre completo, documento de identidad, fecha de nacimiento, correo electrónico, número telefónico y contacto de emergencia.
                  </p>
                </div>
                <div class='p-4 rounded-xl border border-slate-100 bg-slate-50/70'>
                  <span class='material-symbols-outlined text-brand text-lg mb-1'>clinical_notes</span>
                  <h3 class='font-bold text-slate-900 text-sm mb-1'>Datos de Salud Sensibles</h3>
                  <p class='text-slate-600'>
                    Historial médico y psiquiátrico, anamnesis psicológica, notas de evolución terapéutica, planes farmacológicos y evaluaciones
                    psicométricas.
                  </p>
                </div>
                <div class='p-4 rounded-xl border border-slate-100 bg-slate-50/70'>
                  <span class='material-symbols-outlined text-brand text-lg mb-1'>schedule</span>
                  <h3 class='font-bold text-slate-900 text-sm mb-1'>Datos de Gestión y Citas</h3>
                  <p class='text-slate-600'>
                    Historial de agendamientos, asistencia, cancelaciones, preferencias de profesionales y modalidad (presencial u online).
                  </p>
                </div>
                <div class='p-4 rounded-xl border border-slate-100 bg-slate-50/70'>
                  <span class='material-symbols-outlined text-brand text-lg mb-1'>receipt_long</span>
                  <h3 class='font-bold text-slate-900 text-sm mb-1'>Datos Administrativos</h3>
                  <p class='text-slate-600'>
                    Comprobantes de facturación y pagos.
                    <em>No almacenamos números completos de tarjetas de crédito o débito</em>.
                  </p>
                </div>
              </div>
            </section>

            {/* <!-- Sección 3 --> */}
            <section id='finalidad-tratamiento' class='bg-white rounded-2xl p-7 lg:p-9 border border-slate-200/80 shadow-sm scroll-mt-28'>
              <div class='flex items-center gap-3 mb-4'>
                <span class='w-8 h-8 rounded-lg bg-brand-soft text-brand font-bold text-sm flex items-center justify-center'>03</span>
                <h2 class='text-xl font-bold text-slate-900'>Finalidad del Tratamiento de los Datos</h2>
              </div>
              <p class='text-sm text-slate-600 leading-relaxed mb-4'>
                Los datos personales y de salud que nos confías son utilizados exclusivamente para:
              </p>
              <ul class='space-y-2.5 text-xs text-slate-700'>
                <li class='flex items-start gap-2.5'>
                  <span class='material-symbols-outlined text-brand text-base shrink-0 mt-0.5'>check_circle</span>
                  <span>
                    <strong>Atención clínica integral:</strong>
                    Diagnóstico, elaboración de planes terapéuticos personalizados y prescripción médica responsable.
                  </span>
                </li>
                <li class='flex items-start gap-2.5'>
                  <span class='material-symbols-outlined text-brand text-base shrink-0 mt-0.5'>check_circle</span>
                  <span>
                    <strong>Coordinación asistencial:</strong>
                    Comunicación interdisciplinaria interna entre tu psicoterapeuta y psiquiatra tratante cuando el caso lo amerite.
                  </span>
                </li>
                <li class='flex items-start gap-2.5'>
                  <span class='material-symbols-outlined text-brand text-base shrink-0 mt-0.5'>check_circle</span>
                  <span>
                    <strong>Gestión de citas y recordatorios:</strong>
                    Confirmaciones por WhatsApp, SMS o correo electrónico para asegurar la continuidad de tu tratamiento.
                  </span>
                </li>
                <li class='flex items-start gap-2.5'>
                  <span class='material-symbols-outlined text-brand text-base shrink-0 mt-0.5'>check_circle</span>
                  <span>
                    <strong>Cumplimiento normativo de salud:</strong>
                    Custodia y archivo obligatorio de la historia clínica conforme a los plazos legales sanitarios vigentes.
                  </span>
                </li>
              </ul>
            </section>

            {/* <!-- Sección 4 --> */}
            <section id='seguridad-custodia' class='bg-white rounded-2xl p-7 lg:p-9 border border-slate-200/80 shadow-sm scroll-mt-28'>
              <div class='flex items-center gap-3 mb-4'>
                <span class='w-8 h-8 rounded-lg bg-brand-soft text-brand font-bold text-sm flex items-center justify-center'>04</span>
                <h2 class='text-xl font-bold text-slate-900'>Seguridad Técnica y Custodia del Expediente Clínico</h2>
              </div>
              <p class='text-sm text-slate-600 leading-relaxed mb-4'>
                Implementamos salvaguardas tecnológicas y organizativas de nivel hospitalario internacional para impedir cualquier acceso no
                autorizado, alteración o pérdida de datos:
              </p>
              <div class='grid grid-cols-1 sm:grid-cols-3 gap-3 text-center mb-4'>
                <div class='p-4 rounded-xl bg-slate-50 border border-slate-100'>
                  <span class='material-symbols-outlined text-brand text-2xl mb-1'>lock</span>
                  <p class='text-xs font-bold text-slate-800'>Cifrado de Extremo a Extremo</p>
                  <p class='text-[11px] text-slate-500 mt-1'>Protocolos TLS 1.3 y cifrado AES-256 en reposo.</p>
                </div>
                <div class='p-4 rounded-xl bg-slate-50 border border-slate-100'>
                  <span class='material-symbols-outlined text-brand text-2xl mb-1'>passkey</span>
                  <p class='text-xs font-bold text-slate-800'>Acceso Restringido</p>
                  <p class='text-[11px] text-slate-500 mt-1'>Solo el profesional tratante asignado accede a las notas clínicas.</p>
                </div>
                <div class='p-4 rounded-xl bg-slate-50 border border-slate-100'>
                  <span class='material-symbols-outlined text-brand text-2xl mb-1'>history</span>
                  <p class='text-xs font-bold text-slate-800'>Trazabilidad Total</p>
                  <p class='text-[11px] text-slate-500 mt-1'>Auditoría continua de accesos y modificaciones en el sistema.</p>
                </div>
              </div>
              <p class='text-xs text-slate-500 leading-relaxed'>
                Las historias clínicas se conservan digitalmente por el plazo mínimo estipulado por la autoridad de salud pública (típicamente 5 a 15
                años dependiendo de la jurisdicción sanitaria), tras lo cual se procede a su expurgo o anonimización segura.
              </p>
            </section>

            {/* <!-- Sección 5 --> */}
            <section id='teleconsulta' class='bg-white rounded-2xl p-7 lg:p-9 border border-slate-200/80 shadow-sm scroll-mt-28'>
              <div class='flex items-center gap-3 mb-4'>
                <span class='w-8 h-8 rounded-lg bg-brand-soft text-brand font-bold text-sm flex items-center justify-center'>05</span>
                <h2 class='text-xl font-bold text-slate-900'>Privacidad en Telepsicología y Sesiones Online</h2>
              </div>
              <p class='text-sm text-slate-600 leading-relaxed mb-3'>Para aquellos pacientes que eligen la modalidad a distancia:</p>
              <ul class='space-y-2 text-xs text-slate-700'>
                <li class='flex items-start gap-2'>
                  <span class='material-symbols-outlined text-emerald-600 text-sm mt-0.5'>shield</span>
                  <span>
                    <strong>Salas de videoconferencia seguras y cifradas:</strong>
                    No utilizamos plataformas genéricas vulnerables; nuestras videoconsultas se realizan a través de conexiones punto a punto con
                    cifrado.
                  </span>
                </li>
                <li class='flex items-start gap-2'>
                  <span class='material-symbols-outlined text-emerald-600 text-sm mt-0.5'>videocam_off</span>
                  <span>
                    <strong>Prohibición estricta de grabación:</strong>
                    Ni los profesionales de Psiquimed ni los pacientes están autorizados a grabar audio o video de las sesiones sin consentimiento
                    explícito y formal por escrito.
                  </span>
                </li>
                <li class='flex items-start gap-2'>
                  <span class='material-symbols-outlined text-emerald-600 text-sm mt-0.5'>home_pin</span>
                  <span>
                    <strong>Ambiente privado obligatorio:</strong>
                    Nuestros terapeutas realizan la sesión en consultorios insonorizados y cerrados que garantizan el 100% de confidencialidad
                    acústica.
                  </span>
                </li>
              </ul>
            </section>

            {/* <!-- Sección 6 --> */}
            <section id='derechos-arco' class='bg-white rounded-2xl p-7 lg:p-9 border border-slate-200/80 shadow-sm scroll-mt-28'>
              <div class='flex items-center gap-3 mb-4'>
                <span class='w-8 h-8 rounded-lg bg-brand-soft text-brand font-bold text-sm flex items-center justify-center'>06</span>
                <h2 class='text-xl font-bold text-slate-900'>Tus Derechos como Paciente (Derechos ARCO)</h2>
              </div>
              <p class='text-sm text-slate-600 leading-relaxed mb-4'>
                Como titular de tus datos de salud, la ley te confiere plenos derechos para ejercer control sobre ellos en cualquier instante:
              </p>
              <div class='grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs'>
                <div class='p-3.5 bg-slate-50 rounded-xl'>
                  <p class='font-bold text-slate-900 mb-1 flex items-center gap-1.5'>
                    <span class='material-symbols-outlined text-brand text-sm'>visibility</span>
                    Acceso
                  </p>
                  <p class='text-slate-600'>Solicitar copia o resumen oficial de tu expediente clínico e historial de atenciones.</p>
                </div>
                <div class='p-3.5 bg-slate-50 rounded-xl'>
                  <p class='font-bold text-slate-900 mb-1 flex items-center gap-1.5'>
                    <span class='material-symbols-outlined text-brand text-sm'>edit_note</span>
                    Rectificación
                  </p>
                  <p class='text-slate-600'>Actualizar datos de contacto, residencia o información personal desactualizada o inexacta.</p>
                </div>
                <div class='p-3.5 bg-slate-50 rounded-xl'>
                  <p class='font-bold text-slate-900 mb-1 flex items-center gap-1.5'>
                    <span class='material-symbols-outlined text-brand text-sm'>delete_sweep</span>
                    Cancelación / Supresión
                  </p>
                  <p class='text-slate-600'>
                    Eliminación de datos no clínicos, sujeto siempre a los plazos legales de guarda de expedientes sanitarios.
                  </p>
                </div>
                <div class='p-3.5 bg-slate-50 rounded-xl'>
                  <p class='font-bold text-slate-900 mb-1 flex items-center gap-1.5'>
                    <span class='material-symbols-outlined text-brand text-sm'>front_hand</span>
                    Oposición
                  </p>
                  <p class='text-slate-600'>Oponerte al tratamiento para finalidades secundarias como encuestas de satisfacción voluntarias.</p>
                </div>
              </div>
            </section>

            {/* <!-- Sección 7 --> */}
            <section id='contacto-dpo' class='bg-white rounded-2xl p-7 lg:p-9 border border-slate-200/80 shadow-sm scroll-mt-28'>
              <div class='flex items-center gap-3 mb-4'>
                <span class='w-8 h-8 rounded-lg bg-brand-soft text-brand font-bold text-sm flex items-center justify-center'>07</span>
                <h2 class='text-xl font-bold text-slate-900'>Contacto del Oficial de Protección de Datos</h2>
              </div>
              <p class='text-sm text-slate-600 leading-relaxed mb-6'>
                Si deseas ejercer tus derechos ARCO, presentar una inquietud o solicitar una aclaración sobre el manejo ético de tus datos clínicos,
                puedes comunicarte directamente con nuestra Unidad de Privacidad:
              </p>

              <div class='bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                <div class='space-y-1 text-xs'>
                  <p class='font-bold text-slate-900 text-sm'>Comité de Bioética y Privacidad Psiquimed</p>
                  <p class='text-slate-600 flex items-center gap-1.5'>
                    <span class='material-symbols-outlined text-brand text-sm'>mail</span>
                    psiquimed20@gmail.com
                  </p>
                  <p class='text-slate-600 flex items-center gap-1.5'>
                    <span class='material-symbols-outlined text-brand text-sm'>location_on</span>
                    Calle Jorge Juan N33-68 y Av. Atahualpa 170147 Quito, Ecuador
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
