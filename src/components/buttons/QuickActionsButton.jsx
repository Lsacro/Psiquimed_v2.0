import { Link } from 'react-router-dom';

export default function QuickActionButton({ index, name, icon, url }) {
  return (
    <>
      <Link
        className=' w-full p-3 rounded-lg border border-surface-variant hover:border-primary-container hover:bg-primary-fixed transition-all flex flex-col items-center gap-2 text-center group cursor-pointer'
        key={index}
        to={url}
      >
        <span className='material-symbols-outlined text-outline group-hover:text-primary-container transition-colors'>{icon}</span>
        <span className='font-headline-md text-xs font-semibold text-on-surface-variant group-hover:text-primary-container transition-colors'>
          {name}
        </span>
      </Link>
    </>
  );
}
