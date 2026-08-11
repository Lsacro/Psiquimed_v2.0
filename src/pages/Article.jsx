import { useParams } from 'react-router-dom';
import ArticleHero from '../components/hero/ArticleHero';
import ArticleContainer from '../components/container/ArticleContainer.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '../../utils/supabase.js';

export default function Article() {
  const { slug } = useParams();

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchArticles() {
      const { data, error } = await supabase.from('articles').select('*');
      if (error) {
        console.error(error);
        return;
      }

      setArticles(data);
    }

    fetchArticles();
  }, []);

  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchList() {
      const { data, error } = await supabase.from('list_items').select('*');
      if (error) {
        console.error(error);
        return;
      }
      setList(data);
    }

    fetchList();
  }, []);

  const [cta, setCta] = useState([]);
  useEffect(() => {
    async function fetchCta() {
      const { data, error } = await supabase.from('article_ctas').select('*');
      if (error) {
        console.error(error);
        return;
      }
      setCta(data);
    }

    fetchCta();
  }, []);

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <h1>Articulo no encontrado</h1>;
  }
  const card = cta.find((a) => a.id === article.id);

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
