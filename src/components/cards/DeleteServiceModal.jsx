import { useState } from 'react';
import { supabase } from '../../../utils/supabase';

export default function DeleteServiceModal({ service, onClose, onDelete }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleDelete() {
    if (service?.id == null) {
      setError('No se encontró el identificador del servicio.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error: deleteError } = await supabase.from('services').delete().eq('id', service.id);

      if (deleteError) {
        console.error('Error al eliminar:', deleteError);
        setError(deleteError.message);
        return;
      }

      // Actualiza el estado del contenedor padre
      onDelete?.(service.id);

      // Cierra el modal
      onClose();
    } catch (err) {
      console.error('Error inesperado:', err);
      setError(err.message || 'No se pudo eliminar el servicio.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className=' fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div
        role='alertdialog'
        aria-modal='true'
        aria-labelledby='delete-service-title'
        aria-describedby='delete-service-description'
        className='w-full max-w-[400px] rounded-2xl bg-white p-6 shadow-2xl'
      >
        <div className='mb-5 flex justify-center'>
          <div className='flex h-14 w-14 items-center justify-center rounded-full bg-red-100'>
            <span className='material-symbols-outlined text-3xl text-red-600'>delete_forever</span>
          </div>
        </div>

        <div className='text-center'>
          <h2 id='delete-service-title' className='text-xl font-bold text-gray-900'>
            ¿Eliminar servicio?
          </h2>

          <p id='delete-service-description' className='mt-3 text-sm leading-6 text-gray-600'>
            ¿Estás seguro de que deseas eliminar el servicio <strong className='text-gray-900'>{service?.title}</strong>? Esta acción no se puede
            deshacer.
          </p>
        </div>

        {error && <p className='mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700'>{error}</p>}

        <div className='mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end'>
          <button
            type='button'
            onClick={onClose}
            disabled={loading}
            className='rounded-lg border border-gray-300 px-4 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-100 disabled:opacity-50'
          >
            Cancelar
          </button>

          <button
            type='button'
            onClick={handleDelete}
            disabled={loading}
            className='flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50'
          >
            <span className='material-symbols-outlined text-xl'>delete</span>
            {loading ? 'Eliminando...' : 'Sí, eliminar'}
          </button>
        </div>
      </div>
    </div>
  );
}
