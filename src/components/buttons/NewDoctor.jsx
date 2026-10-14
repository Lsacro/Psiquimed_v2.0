import { useState } from 'react';
import { supabase } from '../../../utils/supabase';

export default function NewDoctor({ open, onClose, onCreated }) {
  const [doctorName, setDoctorName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [area, setArea] = useState('');
  const [treatment1, setTreatment1] = useState('');
  const [treatment2, setTreatment2] = useState('');
  const [treatment3, setTreatment3] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleCreateDoctor(event) {
    event.preventDefault();

    setError('');

    if (!doctorName.trim()) {
      setError('Ingresa el nombre del profesional.');
      return;
    }

    setSaving(true);

    try {
      const { data, error: insertError } = await supabase
        .from('professionals')
        .insert({
          title,
          doctor_name: doctorName.trim(),
          area: area.trim(),
          speciality: speciality.trim(),
          category: category.trim(),
          treatment_1: treatment1.trim(),
          treatment_2: treatment2.trim(),
          treatment_3: treatment3.trim(),
          linkedin_url: linkedinUrl.trim(),
          description: description.trim(),
          img_url: imgUrl.trim(),
        })
        .select()
        .single();

      if (insertError) throw insertError;

      // Notificar al componente padre para actualizar la lista
      if (typeof onCreated === 'function') {
        onCreated(data);
      }

      // Limpiar el formulario
      setDoctorName('');
      setSpeciality('');
      setArea('');
      setTreatment1('');
      setTreatment2('');
      setTreatment3('');
      setLinkedinUrl('');
      setDescription('');
      setImgUrl('');
      setTitle('');
      setCategory('');

      onClose();
    } catch (err) {
      console.error('Error al crear el doctor:', err);
      setError(err.message || 'No se pudo crear el profesional.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      {open && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-200 overflow-y-auto'
          id='edit-doctor-modal'
        >
          <div
            className='relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 transform transition-all flex flex-col max-h-[90vh]'
            role='dialog'
            aria-modal='true'
            aria-labelledby='edit-doctor-title'
          >
            <form className='flex min-h-0 flex-col' onSubmit={handleCreateDoctor}>
              {/* Modal Header */}

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
                  type='button'
                  onClick={onClose}
                >
                  <span className='material-symbols-outlined text-[20px]'>close</span>
                </button>
              </div>

              {/* Modal Body / Form Fields */}

              <div className='p-6 overflow-y-auto space-y-5 text-sm font-manrope flex-1'>
                {/* Avatar & Photo Upload Section */}

                <div className='flex items-center gap-5 p-4 rounded-xl bg-surface-container-low border border-slate-200/80'>
                  <div className='relative w-16 h-16 rounded-xl overflow-hidden shadow-sm shrink-0 border-2 border-white'>
                    <img className='w-full h-full object-cover' id='modal-doc-avatar' src={imgUrl} />
                  </div>

                  <div className='flex-1'>
                    <h4 className='text-sm font-semibold text-on-surface'>Foto de Perfil Profesional</h4>

                    <p className='text-xs text-slate-500 mb-2.5'>Formatos admitidos: JPG, PNG. Tamaño máx. 2MB</p>

                    <div className='flex items-center gap-2'>
                      <button
                        className='inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white text-violet-950 border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm'
                        // onClick={() => photoInputRef.current?.click()}
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
                      id='doc-salutation'
                      name='title'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className='w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg'
                      required
                    >
                      <option value='' disabled>
                        Selecciona un título
                      </option>
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
                      value={doctorName}
                      type='text'
                      onChange={(e) => setDoctorName(e.target.value)}
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
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
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
                      value={speciality}
                      onChange={(e) => setSpeciality(e.target.value)}
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
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
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
                        value={linkedinUrl}
                        onChange={(e) => setLinkedinUrl(e.target.value)}
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
                        value={treatment1}
                        onChange={(e) => setTreatment1(e.target.value)}
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
                        value={treatment2}
                        onChange={(e) => setTreatment2(e.target.value)}
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
                        value={treatment3}
                        onChange={(e) => setTreatment3(e.target.value)}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows='3'
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
                    onClick={onClose}
                    type='button'
                  >
                    Cancelar
                  </button>

                  <button
                    className='inline-flex items-center gap-2 bg-primary-container hover:bg-primary text-white px-5 py-2 rounded-lg font-semibold text-sm disabled:opacity-50'
                    type='submit'
                    disabled={saving}
                  >
                    <span className='material-symbols-outlined text-[18px]'>check</span>
                    {saving ? 'Guardando...' : 'Crear profesional'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {error && (
        <p className='mx-6 mt-4 text-sm text-red-600' role='alert'>
          {error}
        </p>
      )}
    </>
  );
}
