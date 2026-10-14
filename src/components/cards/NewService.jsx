import { useState } from 'react';
import { supabase } from '../../../utils/supabase';

export default function NewService({ onClose, onCreated }) {
  const [formData, setFormData] = useState({
    title: '',
    home_resume: '',
    icon: '',
    category: '',
    intro: '',
    resume: '',
    target: '',
    duration: '',
    img_url: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!formData.title.trim()) {
      setError('El nombre del servicio es obligatorio.');
      return;
    }

    setLoading(true);

    try {
      const newService = {
        title: formData.title.trim(),
        home_resume: formData.home_resume.trim(),
        icon: formData.icon.trim(),
        category: formData.category.trim(),
        intro: formData.intro.trim(),
        resume: formData.resume.trim(),
        target: formData.target.trim(),
        duration: formData.duration.trim(),
        img_url: formData.img_url.trim(),
      };

      const { data, error: insertError } = await supabase.from('services').insert([newService]).select().maybeSingle();

      if (insertError) {
        setError(insertError.message);
        return;
      }

      if (!data) {
        setError('El servicio no se creó o no se pudo recuperar el registro.');
        return;
      }

      if (typeof onCreated === 'function') {
        onCreated(data);
      }

      onClose();
    } catch (err) {
      setError(err.message || 'No se pudo crear el servicio.');
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    'w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100';

  const labelClass = 'mb-1.5 block text-sm font-medium text-gray-700';

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div className='max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl'>
        <div className='mb-6 flex items-start justify-between gap-4'>
          <div>
            <h2 className='text-xl font-bold text-gray-900'>Añadir nuevo servicio</h2>
            <p className='mt-1 text-sm text-gray-500'>Completa la informacion</p>
          </div>

          <button
            type='button'
            onClick={onClose}
            disabled={loading}
            aria-label='Cerrar formulario'
            className='rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100'
          >
            <span className='material-symbols-outlined'>close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <div>
            <label className={labelClass}>Nombre del servicio *</label>
            <input name='title' value={formData.title} onChange={handleChange} required placeholder='Ej. Terapia individual' className={inputClass} />
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className={labelClass}>Categoría</label>
              <input name='category' value={formData.category} onChange={handleChange} placeholder='Ej. Psicología' className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Icono</label>
              <input name='icon' value={formData.icon} onChange={handleChange} placeholder='Ej. psychology' className={inputClass} />

              {formData.icon && (
                <div className='mt-2 flex items-center gap-2 text-sm text-gray-500'>
                  Vista previa:
                  <span className='material-symbols-outlined text-2xl'>{formData.icon}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className={labelClass}>Resumen breve</label>
            <textarea
              name='home_resume'
              value={formData.home_resume}
              onChange={handleChange}
              rows={2}
              placeholder='Descripción corta para las tarjetas.'
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Introducción</label>
            <textarea
              name='intro'
              value={formData.intro}
              onChange={handleChange}
              rows={3}
              placeholder='Introducción del servicio.'
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Descripción completa</label>
            <textarea
              name='resume'
              value={formData.resume}
              onChange={handleChange}
              rows={4}
              placeholder='Explica en qué consiste el servicio.'
              className={inputClass}
            />
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className={labelClass}>Público objetivo</label>
              <input name='target' value={formData.target} onChange={handleChange} placeholder='Ej. Adultos y adolescentes' className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Duración</label>
              <input name='duration' value={formData.duration} onChange={handleChange} placeholder='Ej. 45 minutos' className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>URL de la imagen</label>
            <input type='url' name='img_url' value={formData.img_url} onChange={handleChange} placeholder='https://...' className={inputClass} />

            {formData.img_url && (
              <img
                src={formData.img_url}
                alt='Vista previa del servicio'
                className='mt-3 h-44 w-full rounded-xl object-cover'
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={(e) => {
                  e.currentTarget.style.display = 'block';
                }}
              />
            )}
          </div>

          {error && (
            <div role='alert' className='rounded-lg bg-red-50 p-3 text-sm text-red-700'>
              {error}
            </div>
          )}

          <div className='flex flex-col-reverse justify-end gap-3 border-t border-gray-100 pt-5 sm:flex-row'>
            <button
              type='button'
              onClick={onClose}
              disabled={loading}
              className='rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50'
            >
              Cancelar
            </button>

            <button
              type='submit'
              disabled={loading}
              className='flex items-center justify-center gap-2 rounded-lg bg-primary-container px-5 py-2.5 font-semibold text-white transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50'
            >
              <span className='material-symbols-outlined'>{loading ? 'progress_activity' : 'add'}</span>
              {loading ? 'Guardando...' : 'Crear servicio'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
