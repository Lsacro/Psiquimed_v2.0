import { useState } from 'react';
import EducationCardUp from '../cards/EducationCardUp';
import { useEffect } from 'react';
import { supabase } from '../../../utils/supabase';

export default function EducationArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchProfesionales() {
      const { data, error } = await supabase.from('articles_home').select('*');
      if (error) {
        console.error(error);
        return;
      }

      setArticles(data);
    }

    fetchProfesionales();
  }, []);
  return (
    <>
      <section className='max-w-container-max mx-auto px-6 pb-xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter'>
          {articles.map((article) => (
            <EducationCardUp
              key={article.id}
              src={article.thumbnail}
              lectureTime={article.lecture_time}
              title={article.title}
              body={article.resume}
              slug={article.slug}
            />
          ))}
        </div>
      </section>
      <section className='max-w-container-max mx-auto px-6 pb-xl'>
        <div className='bg-primary-fixed/30 rounded-xl p-lg flex flex-col md:flex-row items-center gap-gutter border border-primary-fixed'>
          <div className='w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0'>
            <span className='material-symbols-outlined !text-3xl'>info</span>
          </div>
          <div>
            <h4 className='font-headline-md text-headline-md text-primary mb-xs'>Aviso Importante</h4>
            <p className='font-body-md text-body-md text-on-surface-variant'>
              La información proporcionada en esta sección tiene un propósito puramente educativo y no pretende diagnosticar, tratar, curar o prevenir
              ninguna enfermedad. Estos artículos{' '}
              <strong>no reemplazan la evaluación, diagnóstico o tratamiento de un profesional de la salud mental calificado</strong>. Si estás
              experimentando una crisis, por favor contacta a emergencias inmediatamente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
