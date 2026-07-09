import { useEffect } from 'react';
import EducationCardRigth from '../cards/EducationCardRigth';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../../../utils/supabase';

export default function EducationHome() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchArticles() {
      const { data, error } = await supabase.from('articles_home').select('*');
      if (error) {
        console.error(error);
        return;
      }

      setArticles(data);
    }

    fetchArticles();
  }, []);
  console.log(articles);
  return (
    <>
      <section className='py-xl bg-surface px-8'>
        <div className='max-w-container-max mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-end mb-lg'>
            <div className='max-w-2xl'>
              <h2 className='font-headline-lg text-headline-lg text-on-surface mb-base'>Psico-Educación</h2>
              <p className='font-body-md text-body-md text-on-surface-variant'>
                Recursos y conocimientos para empoderarte en la gestión diaria de tu salud mental.
              </p>
            </div>
            <NavLink
              className='text-primary-container font-label-caps label-caps flex items-center gap-xs mt-sm md:mt-0 hover:text-surface-tint cursor-pointer'
              to='/education'
            >
              Ver Todos
              <span className='material-symbols-outlined text-sm'>arrow_forward</span>
            </NavLink>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-gutter'>
            {articles.map((article, index) => (
              <EducationCardRigth key={index} {...article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
