import { useEffect } from 'react';
import { useState } from 'react';

const slides = [
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5J2BJMRIsDmu6k_Hzgr8551zKl2V90j4G1rKpQeiMhs6uY2JWLUgya1fIw00bPOw_wPxjqTzoJq2Qvqc_CBtZdoW1wmH4gKTOMpj1T8l6iXOPWYiVarJMh7D66299xtwpU-s-AIZRP9qZ2ajcW9fsGk2n-Ze1s0f9g1aMARgGIj-h536qU_0WRYO_V_EELi_hyrFQfQUvrciCkkrd6HlIEa_8gXt6O8l_wZU6MViFeaIJLGqdn3OlQKQctwc1cMdbGMiIQup5hUY',
    title: 'Tu bienestar es nuestra prioridad',
    text: 'Experiencing guided calm through professional psychiatric care and empathetic support tailored to your mental wellness journey.',
  },
  {
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80',
    title: 'Encuentra tu paz interior',
    text: 'Entornos serenos y profesionales capacitados para guiarte hacia una mejor salud mental y equilibrio emocional.',
  },
  {
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80',
    title: 'Apoyo profesional compasivo',
    text: 'Terapias basadas en evidencia diseñadas específicamente para tus necesidades individuales en un espacio seguro.',
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative w-full min-h-[819px] flex items-center bg-surface-container overflow-hidden'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-primary-container/80 via-primary-container/40 to-transparent'></div>
        </div>
      ))}

      <div className='relative z-10 w-full max-w-container-max mx-auto px-8 py-xl'>
        <div className='max-w-2xl bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20'>
          <h1 className='text-5xl font-bold text-white mb-6'>{slides[activeSlide].title}</h1>

          <p className='text-lg text-gray-200 mb-8'>{slides[activeSlide].text}</p>

          <button className='bg-on-tertiary text-primary-container px-8 py-3 rounded-lg font-label-caps label-caps shadow-[0_10px_20px_-5px_rgba(57,20,148,0.1)] hover:bg-inverse-primary cursor-pointer'>
            Comenzar Hoy
          </button>
        </div>
      </div>
    </section>
  );
}
