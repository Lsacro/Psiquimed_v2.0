import { Link } from 'react-router-dom';

export default function CPNavButton({ url, index, icon, name, active, onClick }) {
  return (
    <>
      <li className='w-full' key={index}>
        <Link
          className={
            active
              ? 'flex items-center gap-3 px-6 py-3 text-violet-950  bg-violet-50  font-semibold border-r-4 border-violet-950  font-manrope text-sm duration-200 ease-in-out w-full'
              : 'flex items-center gap-3 px-6 py-3 text-slate-600  hover:text-violet-800  hover:bg-slate-50  font-manrope text-sm duration-200 ease-in-out w-full transition-colors'
          }
          onClick={onClick}
          to={url}
        >
          <span className='material-symbols-outlined cursor-pointer'>{icon}</span>
          {name}
        </Link>
        <a></a>
      </li>
    </>
  );
}
