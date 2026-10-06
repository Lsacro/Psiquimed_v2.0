import { useParams } from 'react-router-dom';
import ArticleHero from '../components/hero/ArticleHero';
import ArticleContainer from '../components/container/ArticleContainer.jsx';
import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase.js';

export default function Article() {
  const { slug } = useParams();

  const [articles, setArticles] = useState([]);
  const [list, setList] = useState([]);
  const [cta, setCta] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const [{ data: articlesData, error: articlesError }, { data: listData, error: listError }, { data: ctaData, error: ctaError }] =
        await Promise.all([
          supabase.from('articles').select('*'),
          supabase.from('list_items').select('*'),
          supabase.from('article_ctas').select('*'),
        ]);

      if (articlesError) {
        console.error('Error articles:', articlesError);
      }

      if (listError) {
        console.error('Error list_items:', listError);
      }

      if (ctaError) {
        console.error('Error article_ctas:', ctaError);
      }

      setArticles(articlesData || []);
      setList(listData || []);
      setCta(ctaData || []);

      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center h-screen items-center m-0 bg-blue-950'>
        <h1 className='text-3xl font-bold text-white'>Cargando artículo...</h1>
      </div>
    );
  }

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <h1>Artículo no encontrado</h1>;
  }

  const card = cta.find((a) => a.article_id === article.id);

  const lists = list.filter((item) => item.article_id === article.id);

  return (
    <>
      <ArticleHero
        id={article.id}
        category={article.category}
        readingTime={article.lecture_time}
        title={article.title}
        author={article.author_name}
        avatar={article.avatar}
        image={article.img}
      />

      <ArticleContainer intro={article} list={lists} card={card} />
    </>
  );
}
