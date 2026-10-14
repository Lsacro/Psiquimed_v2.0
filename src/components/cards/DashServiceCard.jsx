import { useEffect, useState } from 'react';
import { supabase } from '../../../utils/supabase';
import DeleteServiceModal from './DeleteServiceModal';
// import NewService from '../modals/NewService';

export default function DashServiceCard({ service, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  async function handleDelete() {
    setSaving(true);
    setError('');

    try {
      const { data, error: deleteError } = await supabase.from('services').delete().eq('id', service.id).select('id').single();

      if (deleteError) throw deleteError;

      onDelete?.(data.id);
    } catch (err) {
      console.error('Error al eliminar el servicio:', err);
      setError(err.message || 'No se pudo eliminar el servicio.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <div className='bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-surface-container-low flex flex-col group'>
        <div className='h-48 relative overflow-hidden'>
          {service.img_url ? (
            <img
              alt={service.title}
              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
              src={service.img_url}
            />
          ) : (
            <div className='w-full h-full flex items-center justify-center bg-slate-100'>
              <span className='material-symbols-outlined text-5xl text-slate-400'>medical_services</span>
            </div>
          )}

          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />

          <div className='absolute bottom-4 left-4 right-4'>
            <span className='bg-white/90 text-violet-800 px-3 py-1 rounded-full text-xs'>{service.category}</span>
          </div>
        </div>

        <div className='p-4 flex-1 flex flex-col'>
          <h3 className='text-lg font-semibold mb-2'>{service.title}</h3>

          <p className='text-sm text-slate-600 mb-4 flex-1 line-clamp-3'>{service.resume}</p>

          {error && (
            <p className='text-sm text-red-600 mb-3' role='alert'>
              {error}
            </p>
          )}

          <div className='flex justify-end gap-2 border-t pt-3'>
            <button
              type='button'
              title='Editar'
              disabled={saving}
              onClick={() => setEditing(true)}
              className='p-2 text-slate-500 hover:text-violet-700 hover:bg-violet-50 rounded-lg'
            >
              <span className='material-symbols-outlined'>edit</span>
            </button>
            <button
              type='button'
              title='Eliminar servicio'
              onClick={() => setShowDeleteModal(true)}
              className='rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50'
            >
              <span className='material-symbols-outlined'>delete</span>
            </button>
          </div>
        </div>
        {showDeleteModal && <DeleteServiceModal service={service} onClose={() => setShowDeleteModal(false)} onDelete={onDelete} />}
      </div>

      {editing && <EditServiceModal service={service} onClose={() => setEditing(false)} onUpdate={onUpdate} />}
    </>
  );
}

function EditServiceModal({ service, onClose, onUpdate }) {
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

  useEffect(() => {
    if (service) {
      setFormData({
        title: service.title ?? '',
        home_resume: service.home_resume ?? '',
        icon: service.icon ?? '',
        category: service.category ?? '',
        intro: service.intro ?? '',
        resume: service.resume ?? '',
        target: service.target ?? '',
        duration: service.duration ?? '',
        img_url: service.img_url ?? '',
      });
    }
  }, [service]);

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

    if (!service?.id) {
      setError('No se encontró el identificador del servicio.');
      return;
    }

    if (!formData.title.trim()) {
      setError('El nombre del servicio es obligatorio.');
      return;
    }

    setLoading(true);

    const updatedService = {
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

    const { data, error: updateError } = await supabase.from('services').update(updatedService).eq('id', service.id).select().single();

    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    onUpdate(data);
    onClose();
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div className='max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl'>
        <div className='mb-6 flex items-center justify-between'>
          <h2 className='text-xl font-semibold'>Editar servicio</h2>

          <button
            type='button'
            onClick={onClose}
            disabled={loading}
            className='rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100'
            aria-label='Cerrar'
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div>
            <label className='mb-1 block text-sm font-medium'>Nombre del servicio *</label>
            <input
              name='title'
              value={formData.title}
              onChange={handleChange}
              required
              className='w-full rounded-lg border border-gray-300 px-3 py-2'
            />
          </div>

          <div>
            <label className='mb-1 block text-sm font-medium'>Resumen breve</label>
            <textarea
              name='home_resume'
              value={formData.home_resume}
              onChange={handleChange}
              rows={2}
              className='w-full rounded-lg border border-gray-300 px-3 py-2'
            />
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className='mb-1 block text-sm font-medium'>Categoría</label>
              <input
                name='category'
                value={formData.category}
                onChange={handleChange}
                className='w-full rounded-lg border border-gray-300 px-3 py-2'
              />
            </div>

            <div>
              <label className='mb-1 block text-sm font-medium'>Icono (Material Symbols)</label>
              <input
                name='icon'
                value={formData.icon}
                onChange={handleChange}
                placeholder='psychology'
                className='w-full rounded-lg border border-gray-300 px-3 py-2'
              />
              {formData.icon && <span className='material-symbols-outlined mt-2'>{formData.icon}</span>}
            </div>
          </div>

          <div>
            <label className='mb-1 block text-sm font-medium'>Introducción</label>
            <textarea
              name='intro'
              value={formData.intro}
              onChange={handleChange}
              rows={3}
              className='w-full rounded-lg border border-gray-300 px-3 py-2'
            />
          </div>

          <div>
            <label className='mb-1 block text-sm font-medium'>Resumen / descripción</label>
            <textarea
              name='resume'
              value={formData.resume}
              onChange={handleChange}
              rows={4}
              className='w-full rounded-lg border border-gray-300 px-3 py-2'
            />
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className='mb-1 block text-sm font-medium'>Público objetivo</label>
              <input name='target' value={formData.target} onChange={handleChange} className='w-full rounded-lg border border-gray-300 px-3 py-2' />
            </div>

            <div>
              <label className='mb-1 block text-sm font-medium'>Duración</label>
              <input
                name='duration'
                value={formData.duration}
                onChange={handleChange}
                placeholder='Ej. 45 minutos'
                className='w-full rounded-lg border border-gray-300 px-3 py-2'
              />
            </div>
          </div>

          <div>
            <label className='mb-1 block text-sm font-medium'>URL de imagen</label>
            <input
              name='img_url'
              type='url'
              value={formData.img_url}
              onChange={handleChange}
              placeholder='https://...'
              className='w-full rounded-lg border border-gray-300 px-3 py-2'
            />

            {formData.img_url && <img src={formData.img_url} alt='Vista previa del servicio' className='mt-3 h-40 w-full rounded-lg object-cover' />}
          </div>

          {error && <p className='rounded-lg bg-red-50 p-3 text-sm text-red-700'>{error}</p>}

          <div className='mt-2 flex justify-end gap-3'>
            <button type='button' onClick={onClose} disabled={loading} className='rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50'>
              Cancelar
            </button>

            <button
              type='submit'
              disabled={loading}
              className='rounded-lg bg-primary-container px-4 py-2 font-semibold text-white hover:bg-primary disabled:opacity-50'
            >
              {loading ? 'Guardando...' : 'Guardar cambios'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
