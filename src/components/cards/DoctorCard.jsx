import { useState } from 'react';

export default function DoctorCard({ profesionales, index }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      key={index}
      className='group relative min-w-[280px] md:min-w-[320px] lg:min-w-[340px] h-[450px] rounded-3xl overflow-hidden shrink-0 shadow-xl snap-start cursor-pointer'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setIsHover(!isHover)}
    >
      <img src={profesionales.img_url} alt={profesionales.doctor_name} className='absolute inset-0 w-full h-full object-cover' />

      <div className='absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent' />

      {!isHover && (
        <div className='absolute bottom-0 left-0 p-6 z-10'>
          <h3 className='text-2xl font-bold text-white'>{profesionales.doctor_name}</h3>

          <p className='font-label-caps label-caps text-secondary-container mt-xs'>{profesionales.speciality}</p>
        </div>
      )}

      <div
        className={`
          absolute inset-0
          bg-purple-950/90
          transition-all duration-500
          flex flex-col justify-center items-center
          text-center p-8
          ${isHover ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <h3 className='text-3xl font-bold text-white mb-4'>{profesionales.doctor_name}</h3>

        <p className='text-purple-100 leading-relaxed'>{profesionales.description}</p>
      </div>
    </div>
  );
}
