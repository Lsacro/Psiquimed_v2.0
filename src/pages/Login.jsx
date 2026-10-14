import { Link } from 'react-router-dom';
import LoginForm from '../components/container/LoginForm';
import { useState } from 'react';

export default function Login() {
  const [error, setError] = useState(false);
  return (
    <>
      <div className='min-h-screen bg-slate-50 text-slate-800 antialiased overflow-y-auto w-full flex flex-col font-sans selection:bg-purple-100 selection:text-primary-container'>
        <header className='w-full bg-white/95 backdrop-blur border-b border-slate-200 sticky top-0 z-30 transition-colors'>
          <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
            <a className='flex items-center gap-3 group' href='#'>
              <div className='w-10 h-10 rounded-xl bg-primary-container text-white flex items-center justify-center font-bold text-xl shadow-md shadow-purple-900/20 group-hover:bg-primary transition-colors'>
                Ψ
              </div>
              <div>
                <span className='text-2xl font-extrabold tracking-tight text-primary-container'>Psiquimed</span>
                <span className='block text-[11px] font-bold text-slate-400 uppercase tracking-wider'>PORTAL CMS ADMINISTRATIVO</span>
              </div>
            </a>
            <div className='flex items-center gap-4'>
              <a
                className='inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary-container transition-colors py-2 px-3 rounded-lg hover:bg-slate-100'
                href='#'
              >
                <span className='material-symbols-outlined text-[18px]'>arrow_back</span>
                <span>Volver al sitio web</span>
              </a>
              <div className='h-4 w-px bg-slate-200 hidden sm:block'></div>
              <div className='hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-100/90 px-3.5 py-1.5 rounded-full border border-slate-200'>
                <span className='w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse'></span>
                <span>Servidores Seguros SSL 256-bit</span>
              </div>
            </div>
          </div>
        </header>
        <main className='flex-1 w-full box-border flex flex-col items-center justify-center px-4 sm:px-6 py-10 md:py-14 relative bg-gradient-to-b from-slate-50 via-purple-50/30 to-slate-100/70'>
          <div className='w-full max-w-128'>
            <div className='bg-white rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-200 p-8 sm:p-10 relative'>
              <div className='text-center mb-8'>
                <div className='inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-100 text-primary-container mb-4 shadow-sm border border-purple-200'>
                  <span className='material-symbols-outlined text-[42px]!'>admin_panel_settings</span>
                </div>
                <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>Acceso Administrativo</h1>
                <p className='text-sm text-slate-500 mt-2 leading-relaxed  mx-auto'>
                  Ingresa tus credenciales autorizadas para gestionar especialistas, servicios y artículos clínicos.
                </p>
              </div>
              <div className='hidden mb-6 p-3.5 rounded-xl text-xs flex items-start gap-2.5 transition-all' id='loginAlert'>
                <span className='material-symbols-outlined text-[18px] shrink-0 mt-0.5' id='alertIcon'>
                  info
                </span>
                <span id='alertMessage'></span>
              </div>
              {error && (
                <div
                  class='mb-6 p-4 rounded-xl text-xs flex items-start gap-3 bg-red-50 border border-red-200 text-red-900 shadow-sm transition-all'
                  id='loginAlert'
                  role='alert'
                >
                  <span class='material-symbols-outlined text-[20px] text-red-600 shrink-0 mt-0.5' id='alertIcon'>
                    error
                  </span>
                  <div class='space-y-1 flex-1'>
                    <p class='font-bold text-red-800 text-sm'>Error de autenticación</p>
                    <p class='text-red-700 leading-relaxed' id='alertMessage'>
                      Las credenciales ingresadas no coinciden con nuestros registros o la cuenta no tiene permisos activos.
                    </p>
                  </div>
                </div>
              )}
              <LoginForm error={error} onChangeError={(e) => setError(e)} />
              <div className='mt-8 pt-6 border-t border-slate-100'>
                <div className='flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200'>
                  <span className='material-symbols-outlined text-primary-container text-lg shrink-0 mt-0.5'>security</span>
                  <p className='text-xs text-slate-600 leading-relaxed'>
                    <strong className='font-bold text-slate-800'>Acceso restringido: </strong>
                    La manipulación no autorizada de historiales clínicos y contenidos de Psiquimed está monitoreada bajo estricto secreto profesional
                    y normativas de confidencialidad médica.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-6 text-center text-xs text-slate-500 space-y-2'>
              <p>
                ¿Problemas para acceder? Contacta al soporte técnico institucional en <br />
                <Link
                  className='text-primary-container font-bold hover:underline'
                  to='https://wa.me/593998964126'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  soporte@psiquimed.com
                </Link>
              </p>
              <div className='flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1'></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
