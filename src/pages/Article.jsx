import { useParams } from 'react-router-dom';
import articleData from '../db/articles.js';
import ArticleHero from '../components/hero/ArticleHero';
import ArticleContainer from '../components/container/ArticleContainer.jsx';

export default function Article() {
  const { slug } = useParams();

  const article = articleData.find((a) => a.slug === slug);

  if (!article) {
    return <h1>Articulo no encontrado</h1>;
  }

  return (
    <>
      <ArticleHero
        image={article.hero.image}
        imageAlt={article.hero.imageAlt}
        category={article.hero.category}
        readingTime={article.hero.readingTime}
        title={article.hero.title}
        author={article.hero.author.name}
        role={article.hero.author.role}
        avatar={article.hero.author.avatar}
      />
      <ArticleContainer intro={article.introduction} body={article.body} tips={article.tips} cta={article.cta} />
    </>
  );
}
