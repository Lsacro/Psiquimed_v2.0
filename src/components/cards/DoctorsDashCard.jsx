import { useState, useEffect } from 'react';
import { supabase } from '../../../utils/supabase';

export default function DashDoctorsCard({
  id,
  title,
  speciality,
  img_url,
  doctor_name,
  treatment_1,
  treatment_2,
  treatment_3,
  area,
  linkedin_url,
  description,
  category,
  onUpdate,
  onDelete,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [formData, setFormData] = useState({
    title: title ?? '',
    doctor_name: doctor_name ?? '',
    area: area ?? '',
    speciality: speciality ?? '',
    category: category ?? '',
    linkedin_url: linkedin_url ?? '',
    treatment_1: treatment_1 ?? '',
    treatment_2: treatment_2 ?? '',
    treatment_3: treatment_3 ?? '',
    description: description ?? '',
    img_url: img_url ?? '',
  });

  useEffect(() => {
    if (!isOpen) return;

    setFormData({
      title: title ?? '',
      doctor_name: doctor_name ?? '',
      area: area ?? '',
      speciality: speciality ?? '',
      category: category ?? '',
      linkedin_url: linkedin_url ?? '',
      treatment_1: treatment_1 ?? '',
      treatment_2: treatment_2 ?? '',
      treatment_3: treatment_3 ?? '',
      description: description ?? '',
      img_url: img_url ?? '',
    });

    setError('');
    setSuccess('');
  }, [isOpen, id, title, doctor_name, area, speciality, category, linkedin_url, treatment_1, treatment_2, treatment_3, description, img_url]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleUpdateDoctor(event) {
    event.preventDefault();

    if (id === null || id === undefined) {
      setError('No se encontró el ID del doctor.');
      return;
    }

    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const { data, error: updateError } = await supabase
        .from('professionals')
        .update({
          title: formData.title,
          doctor_name: formData.doctor_name,
          area: formData.area,
          speciality: formData.speciality,
          category: formData.category,
          linkedin_url: formData.linkedin_url,
          treatment_1: formData.treatment_1,
          treatment_2: formData.treatment_2,
          treatment_3: formData.treatment_3,
          description: formData.description,
          img_url: formData.img_url,
        })
        .eq('id', id)
        .select()
        .single();

      if (updateError) {
        throw updateError;
      }

      // Actualizar inmediatamente el estado del componente padre
      if (typeof onUpdate === 'function') {
        onUpdate(data);
      }

      setSuccess('Doctor actualizado correctamente.');
      setIsOpen(false);
    } catch (err) {
      console.error('Error al actualizar el doctor:', err);
      setError(err.message || 'No se pudo actualizar el doctor.');
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteDoctor() {
    if (id === null || id === undefined) {
      setError('No se encontró el ID del doctor.');
      return;
    }

    setSaving(true);
    setError('');

    try {
      const { data, error: deleteError } = await supabase.from('professionals').delete().eq('id', id).select('id').single();

      if (deleteError) throw deleteError;

      // Actualizar inmediatamente la lista del componente padre
      // Actualizar la lista en el componente padre
      if (typeof onDelete === 'function') {
        onDelete(data.id);
      }

      // Cerrar el modal solamente si se eliminó correctamente
      setShowDeleteModal(false);
    } catch (err) {
      console.error('Error al eliminar el doctor:', err);
      setError(err.message || 'No se pudo eliminar el doctor.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <div className='grid grid-cols-12 gap-4 px-6 py-md items-center hover:bg-surface-bright transition-colors group'>
        {/* <!-- Profile --> */}
        <div className='col-span-8 md:col-span-4 flex items-center gap-4'>
          <div className='w-12 h-12 rounded-xl overflow-hidden shadow-sm shrink-0'>
            <img
              alt='Dr. Sarah Jenkins'
              className='w-full h-full object-cover'
              data-alt='professional headshot of a smiling female doctor with stethoscope in a well-lit modern clinic setting'
              src={img_url}
            />
          </div>
          <div>
            <h3 className='font-headline-md text-body-md font-semibold text-on-surface '>{doctor_name}</h3>
            <p className='font-body-md text-sm text-on-surface-variant'>{area}</p>
          </div>
        </div>
        {/* <!-- Specialties --> */}
        <div className='col-span-4 hidden md:flex items-center gap-2 flex-wrap'>
          <span className='bg-secondary-fixed text-on-secondary-fixed rounded-full px-sm py-xs font-label-caps text-label-caps whitespace-nowrap'>
            {treatment_1}
          </span>
          <span className='bg-surface-container text-on-surface-variant rounded-full px-sm py-xs font-label-caps text-label-caps whitespace-nowrap'>
            {treatment_2}
          </span>
          <span className='bg-surface-container text-on-surface-variant rounded-full px-sm py-xs font-label-caps text-label-caps whitespace-nowrap'>
            {treatment_3}
          </span>
        </div>
        {/* <!-- Status --> */}
        <div className='col-span-4 md:col-span-2 flex items-center'>
          <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 font-label-caps text-label-caps border border-green-200'>
            <span className='w-1.5 h-1.5 rounded-full bg-green-500'></span>
            Active
          </span>
        </div>
        {/* <!-- Actions --> */}
        <div className='col-span-4 md:col-span-2 flex items-center justify-end gap-2'>
          <button
            type='button'
            className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-manrope font-semibold text-primary hover:bg-violet-100 transition-colors focus:ring-2 focus:ring-violet-200'
            onClick={() => setIsOpen(true)}
          >
            <span className='material-symbols-outlined text-[18px]'>edit</span>
            <span className=''>Editar</span>
          </button>
          <button
            type='button'
            onClick={() => setShowDeleteModal(true)}
            className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold text-error hover:bg-error-container transition-colors'
          >
            <span className='material-symbols-outlined text-[18px]'>delete</span>
            Eliminar
          </button>
        </div>
      </div>
      {error && (
        <p className='mx-6 mt-4 text-sm text-red-600' role='alert'>
          {error}
        </p>
      )}
      {success && (
        <p className='mx-6 mt-4 text-sm text-green-700' role='status'>
          {success}
        </p>
      )}
      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-200 overflow-y-auto'
          id='edit-doctor-modal'
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div
            className='relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 transform transition-all flex flex-col max-h-[90vh]'
            role='dialog'
            aria-modal='true'
            aria-labelledby='edit-doctor-title'
          >
            <form className='flex min-h-0 flex-col' onSubmit={handleUpdateDoctor}>
              <div className='flex items-start justify-between px-6 py-5 border-b border-slate-200 bg-surface-container-lowest sticky top-0 z-10'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-xl bg-violet-50 text-violet-950 flex items-center justify-center'>
                    <span className='material-symbols-outlined text-[22px]'>edit_document</span>
                  </div>

                  <div>
                    <h3 id='edit-doctor-title' className='text-lg font-bold text-violet-950 font-manrope leading-snug'>
                      Editar Profesional
                    </h3>

                    <p className='text-xs text-slate-500 font-manrope'>
                      Actualiza los datos clínicos, especialidades y estado del doctor en Psiquimed
                    </p>
                  </div>
                </div>

                <button
                  aria-label='Cerrar modal'
                  className='w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 flex items-center justify-center transition-colors'
                  onClick={() => setIsOpen(false)}
                  type='button'
                >
                  <span className='material-symbols-outlined text-[20px]'>close</span>
                </button>
              </div>

              {/* Modal Body / Form Fields */}

              <div className='p-6 overflow-y-auto space-y-5 text-sm font-manrope flex-1'>
                {/* Avatar & Photo Upload Section */}

                <div className='flex items-center gap-5 p-4 rounded-xl bg-surface-container-low border border-slate-200/80'>
                  <div className='relative w-16 h-16 rounded-xl overflow-hidden shadow-sm shrink-0 border-2 border-white'>
                    <img className='w-full h-full object-cover' id='modal-doc-avatar' src={img_url} />
                  </div>

                  <div className='flex-1'>
                    <h4 className='text-sm font-semibold text-on-surface'>Foto de Perfil Profesional</h4>

                    <p className='text-xs text-slate-500 mb-2.5'>Formatos admitidos: JPG, PNG. Tamaño máx. 2MB</p>

                    <div className='flex items-center gap-2'>
                      <button
                        className='inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white text-violet-950 border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm'
                        type='button'
                      >
                        <span className='material-symbols-outlined text-[16px]'>photo_camera</span>
                        Cambiar foto
                      </button>

                      <button className='text-xs text-slate-500 hover:text-error transition-colors px-2 py-1' type='button'>
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>

                {/* Fila 1: Título / Tratamiento y Nombre y Apellido */}

                <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
                  <div className='md:col-span-4'>
                    <label className='block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide' htmlFor='doc-salutation'>
                      Título / Tratamiento
                    </label>

                    <select
                      className='w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-violet-200 transition-shadow'
                      id='doc-salutation'
                      name='salutation'
                      value={formData.title}
                      onChange={handleChange}
                    >
                      <option value='Dr.'>Dr.</option>
                      <option value='Dra.'>Dra.</option>
                      <option value='Lic.'>Lic.</option>
                      <option value='Mgs.'>Mgs.</option>
                      <option value='Msc.'>Msc.</option>
                    </select>
                  </div>

                  <div className='md:col-span-8'>
                    <label className='block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide' htmlFor='doc-fullname'>
                      Nombre y Apellido
                    </label>

                    <input
                      className='w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-violet-200 transition-shadow'
                      id='doc-fullname'
                      name='doctor_name'
                      value={formData.doctor_name}
                      onChange={handleChange}
                      type='text'
                    />
                  </div>
                </div>

                {/* Fila 2: Área y Enlace de LinkedIn */}

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div>
                    <label className='block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide' htmlFor='doc-area'>
                      Área
                    </label>

                    <input
                      className='w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-violet-200 transition-shadow'
                      id='doc-area'
                      name='area'
                      value={formData.area}
                      onChange={handleChange}
                      type='text'
                    />
                  </div>

                  <div>
                    <label className='block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide' htmlFor='doc-specialty-main'>
                      Especialidad
                    </label>

                    <input
                      className='w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-violet-200 transition-shadow'
                      id='doc-specialty-main'
                      name='speciality'
                      value={formData.speciality}
                      onChange={handleChange}
                      type='text'
                    />
                  </div>
                  <div>
                    <label className='block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide' htmlFor='doc-specialty-main'>
                      Categoría Filtro
                    </label>

                    <input
                      className='w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-violet-200 transition-shadow'
                      id='doc-specialty-main'
                      name='category'
                      value={formData.category}
                      onChange={handleChange}
                      type='text'
                    />
                  </div>

                  <div className='md:col-span-3'>
                    <label className='block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide' htmlFor='doc-linkedin'>
                      Enlace / URL de LinkedIn
                    </label>

                    <div className='relative'>
                      <span className='material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]'>link</span>

                      <input
                        className='w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-violet-200 transition-shadow'
                        id='doc-linkedin'
                        name='linkedin_url'
                        value={formData.linkedin_url}
                        onChange={handleChange}
                        type='url'
                      />
                    </div>
                  </div>
                </div>

                {/* Fila 3: Especialidades (3 Especialidades Requeridas) */}

                <div className='space-y-2'>
                  <label className='block text-xs font-semibold text-slate-700 uppercase tracking-wide'>Especialidades (3 requeridas)</label>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    <div>
                      <label className='block text-[11px] font-medium text-slate-500 mb-1' htmlFor='doc-spec-1'>
                        Especialidad 1
                      </label>

                      <input
                        className='w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-violet-200 transition-shadow'
                        id='doc-spec-1'
                        name='treatment_1'
                        value={formData.treatment_1}
                        onChange={handleChange}
                        type='text'
                      />
                    </div>

                    <div>
                      <label className='block text-[11px] font-medium text-slate-500 mb-1' htmlFor='doc-spec-2'>
                        Especialidad 2
                      </label>

                      <input
                        className='w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-violet-200 transition-shadow'
                        id='doc-spec-2'
                        name='treatment_2'
                        value={formData.treatment_2}
                        onChange={handleChange}
                        type='text'
                      />
                    </div>

                    <div>
                      <label className='block text-[11px] font-medium text-slate-500 mb-1' htmlFor='doc-spec-3'>
                        Especialidad 3
                      </label>

                      <input
                        className='w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-violet-200 transition-shadow'
                        id='doc-spec-3'
                        name='treatment_3'
                        value={formData.treatment_3}
                        onChange={handleChange}
                        type='text'
                      />
                    </div>
                  </div>
                </div>

                {/* Fila 4: Descripción / Bio Profesional */}

                <div className=''>
                  <label className='block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide' htmlFor='doc-bio'>
                    Descripción / Bio Profesional
                  </label>

                  <textarea
                    className='w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-violet-200 transition-shadow resize-none'
                    id='doc-bio'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>
              </div>

              {/* Modal Footer Actions */}

              <div className='flex items-center justify-between px-6 py-4 bg-surface-container-low border-t border-slate-200 sticky bottom-0 z-10'>
                <div className='text-xs text-slate-500 flex items-center gap-1.5'>
                  <span className='material-symbols-outlined text-[16px] text-green-600'>verified</span>
                  ID Clínico:
                  <span className='font-semibold text-slate-700'>DOC-2024-01</span>
                </div>

                <div className='flex items-center gap-3'>
                  <button
                    className='px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors'
                    onClick={() => setIsOpen(false)}
                    type='button'
                  >
                    Cancelar
                  </button>

                  <button
                    className='inline-flex items-center gap-2 bg-primary-container hover:bg-primary text-white px-5 py-2 rounded-lg font-manrope font-semibold text-sm shadow-[0_2px_4px_rgba(57,20,148,0.15)] active:scale-95 transition-all'
                    type='submit'
                    disabled={saving}
                  >
                    <span className='material-symbols-outlined text-[18px]'>check</span>

                    {saving ? 'Guardando...' : 'Guardar Cambios'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {showDeleteModal && (
        <div
          className='fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4'
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowDeleteModal(false);
            }
          }}
        >
          <div
            role='alertdialog'
            aria-modal='true'
            aria-labelledby='delete-title'
            aria-describedby='delete-description'
            className='w-full max-w-[480px] rounded-2xl bg-white p-6 shadow-2xl'
          >
            <div className='flex flex-col items-center text-center gap-3'>
              <div className='flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600'>
                <span className='material-symbols-outlined text-3xl'>delete_forever</span>
              </div>

              <h2 id='delete-title' className='text-xl font-bold text-slate-900'>
                ¿Eliminar profesional?
              </h2>

              <p id='delete-description' className='text-sm text-slate-500'>
                ¿Estás seguro de que deseas eliminar a <strong className='text-slate-800'>{doctor_name}</strong>? Esta acción no se puede deshacer.
              </p>
            </div>

            {error && (
              <p className='mt-4 text-sm text-red-600' role='alert'>
                {error}
              </p>
            )}

            <div className='mt-6 flex justify-end gap-3'>
              <button
                type='button'
                onClick={() => setShowDeleteModal(false)}
                disabled={saving}
                className='rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50'
              >
                Cancelar
              </button>

              <button
                type='button'
                onClick={async () => {
                  await handleDeleteDoctor();
                  // El cierre definitivo se realiza al borrar correctamente.
                }}
                disabled={saving}
                className='rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50'
              >
                {saving ? 'Eliminando...' : 'Sí, eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
