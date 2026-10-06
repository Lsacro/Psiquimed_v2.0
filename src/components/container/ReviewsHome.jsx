import { useRef } from 'react';
import GoogleIcon from '../icons/GoogleIcon';
import ReviewCard from '../cards/ReviewCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { supabase } from '../../../utils/supabase';

export default function ReviewsHome() {
  const reviewsContainerRef = useRef(null);

  const scrollPrev = () => {
    reviewsContainerRef.current?.scrollBy({
      left: -360,
      behavior: 'smooth',
    });
  };

  const scrollNext = () => {
    reviewsContainerRef.current?.scrollBy({
      left: 360,
      behavior: 'smooth',
    });
  };

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function fetchProfesionales() {
      const { data, error } = await supabase.rpc('get_random_reviews', {
        limit_count: 15,
      });
      if (error) {
        console.error(error);
        return;
      }

      setReviews(data);
    }

    fetchProfesionales();
  }, []);

  return (
    <section className='py-xl bg-surface-container-low px-8 overflow-hidden'>
      <div className='max-w-container-max mx-auto'>
        {/* Header */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-lg gap-4'>
          <div>
            {/* Google Reviews */}
            <div className='flex items-center gap-2 mb-2'>
              <GoogleIcon />

              <span className='font-label-caps text-label-caps text-[#391494] font-bold tracking-wider uppercase'>Google Reviews</span>
            </div>

            {/* Título */}
            <h2 className='font-headline-lg text-headline-lg text-on-surface mb-base'>Lo que dicen nuestros pacientes</h2>

            {/* Rating */}
            <div className='flex items-center gap-3 flex-wrap'>
              <div className='flex items-center text-amber-500 text-lg'>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <span className='font-bold text-on-surface'>4.9 / 5.0</span>

              <span className='text-on-surface-variant text-sm'>• Más de 150 opiniones verificadas</span>
            </div>
          </div>

          {/* Botones de navegación */}
          <div className='flex items-center gap-3 mt-4 md:mt-0'>
            <button
              type='button'
              onClick={scrollPrev}
              aria-label='Anterior'
              className='w-10 h-10 rounded-full border border-outline-variant/30 bg-surface-container-lowest text-on-surface flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm active:scale-95 duration-150'
            >
              <span className='material-symbols-outlined text-xl'>chevron_left</span>
            </button>

            <button
              type='button'
              onClick={scrollNext}
              aria-label='Siguiente'
              className='w-10 h-10 rounded-full border border-outline-variant/30 bg-surface-container-lowest text-on-surface flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm active:scale-95 duration-150'
            >
              <span className='material-symbols-outlined text-xl'>chevron_right</span>
            </button>
          </div>
        </div>

        {/* Carrusel */}
        <div ref={reviewsContainerRef} className='flex overflow-x-auto gap-gutter pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar'>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
