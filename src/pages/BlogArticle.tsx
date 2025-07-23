import { useParams } from 'react-router-dom';
import { blogArticles } from '../data/blogArticles';
import ReactMarkdown from 'react-markdown';

const BlogArticle = () => {
  const { slug } = useParams();
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) return <div>Article not found.</div>;

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-600 mb-8">{article.date}</p>
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </section>
  );
};

export default BlogArticle; 