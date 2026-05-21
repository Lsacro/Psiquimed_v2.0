export default function EducationCard({ src, alt, time, title, description }) {
  return (
    <>
      <div className='bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(57,20,148,0.05)] border border-outline-variant/30 flex flex-col md:flex-row'>
        <div className='w-full md:w-2/5 aspect-[16/9] md:aspect-auto'>
          <img alt={alt} className='w-full h-full object-cover' src={src} />
        </div>
        <div className='p-md w-full md:w-3/5 flex flex-col justify-center'>
          <span className='font-label-caps label-caps! text-secondary px-3 py-1 bg-secondary-container/20 rounded-full w-fit mb-sm'>{time}</span>
          <h3 className='font-headline-md text-headline-md text-on-surface mb-sm'>{title}</h3>
          <p className='font-body-md text-body-md text-on-surface-variant line-clamp-2'>{description}</p>
        </div>
      </div>
    </>
  );
}
