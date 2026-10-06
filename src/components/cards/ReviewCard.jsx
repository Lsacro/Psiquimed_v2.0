import GoogleIcon from '../icons/GoogleIcon';

export default function ReviewCard({ review }) {
  function formatRelativeDate(dateString) {
    const reviewDate = new Date(dateString);
    const now = new Date();

    const diffMs = now - reviewDate;

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    // Menos de 1 semana
    if (diffDays < 7) {
      return `Hace ${diffDays} ${diffDays === 1 ? 'día' : 'días'}`;
    }

    // Semanas
    const weeks = Math.floor(diffDays / 7);

    if (weeks < 4) {
      return `Hace ${weeks} ${weeks === 1 ? 'semana' : 'semanas'}`;
    }

    // Meses
    const months = Math.floor(diffDays / 30);

    if (months <= 6) {
      return `Hace ${months} ${months === 1 ? 'mes' : 'meses'}`;
    }

    // Más de 6 meses → fecha
    const day = String(reviewDate.getDate()).padStart(2, '0');
    const month = String(reviewDate.getMonth() + 1).padStart(2, '0');
    const year = String(reviewDate.getFullYear()).slice(-2);

    return `${day}/${month}/${year}`;
  }
  return (
    <>
      <div className='snap-center shrink-0 w-full md:w-[340px] md:mr-md bg-white  p-6 rounded-2xl border border-outline-variant/30 shadow-[0_2px_4px_rgba(57,20,148,0.05)] hover:shadow-[0_10px_20px_rgba(57,20,148,0.08)] transition-shadow flex flex-col justify-between min-h-[260px]'>
        <div>
          {/* Usuario */}
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center gap-3'>
              <div>
                <h4 className='font-headline-md text-base font-bold text-on-surface leading-tight'>{review.name}</h4>

                <span className='text-xs text-on-surface-variant'>{formatRelativeDate(review.created_at)}</span>
              </div>
            </div>
            {<GoogleIcon />}
          </div>

          {/* Estrellas */}
          <div className='flex items-center text-amber-500 text-sm mb-3'>
            {Array.from({ length: review.rating }).map((_, index) => (
              <span key={index}>★</span>
            ))}
          </div>

          {/* Review */}
          <p className='font-body-md text-on-surface text-sm leading-relaxed mb-4'>“{review.review_text}”</p>
        </div>

        {/* Verificado */}
        {review.certified && (
          <div className='flex items-center gap-1.5 pt-3 border-t border-slate-100 text-xs text-secondary font-medium'>
            <span className='material-symbols-outlined text-sm text-green-600'>verified</span>

            <span>Paciente verificado</span>
          </div>
        )}
      </div>
    </>
  );
}
