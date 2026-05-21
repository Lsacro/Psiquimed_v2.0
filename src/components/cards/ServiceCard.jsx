export default function ServiceCard({ icon, title, description }) {
  return (
    <div className='bg-surface-container-lowest p-lg rounded-xl shadow-[0_2px_15px_-3px_rgba(57,20,148,0.05)] flex flex-col items-center text-center border border-outline-variant/30'>
      <div className='w-16 h-16 rounded-full bg-secondary-container/30 flex items-center justify-center mb-md'>
        <span className='material-symbols-outlined text-on-secondary-container text-4xl!'>{icon}</span>
      </div>
      <h3 className='font-headline-md text-headline-md text-on-surface mb-sm'>{title}</h3>
      <p className='font-body-md text-body-md text-on-surface-variant'>{description}</p>
    </div>
  );
}
