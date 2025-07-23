import { blogArticles } from '../data/blogArticles';
import { Link } from 'react-router-dom';

const Blog = () => (
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Blog Articles</h1>
      <ul>
        {blogArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(article => (
          <li key={article.slug} className="mb-8">
            <h2 className="text-2xl font-semibold">{article.title}</h2>
            <p className="text-gray-600 mb-2">{article.date}</p>
            <p className="mb-2">{article.summary}</p>
            <Link to={`/blog/${article.slug}`} className="text-blue-600 underline">Continue Reading</Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Blog; 