export interface BlogArticle {
  slug: string;
  title: string;
  summary: string;
  date: string;
  content: string; // Markdown
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "cartagena-market-trends-2024",
    title: "Cartagena Real Estate Market Trends 2024",
    summary: "Discover the latest market insights and investment opportunities in Cartagena's booming property sector.",
    date: "2024-12-15",
    content: `
# Cartagena Real Estate Market Trends 2024

Discover the latest market insights and investment opportunities in Cartagena's booming property sector. Learn about appreciation rates and future projections.
**=More content here...*
    `
  },
  {
    slug: "foreign-investment-guide-colombia",
    title: "Foreign Investment Guide: Buying Property in Colombia",
    summary: "A comprehensive guide for international buyers looking to invest in Colombian real estate.",
    date: "2024-12-10",
    content: `
# Foreign Investment Guide: Buying Property in Colombia

A comprehensive guide for international buyers looking to invest in Colombian real estate. Navigate legal requirements, financing options, and tax implications.

*More content here...*
    `
  },
  {
    slug: "caribbean-dream-lifestyle-cartagena",
    title: "Living the Caribbean Dream: Lifestyle Benefits of Cartagena",
    summary: "Explore the incredible lifestyle advantages of owning property in Cartagena.",
    date: "2024-12-05",
    content: `
# Living the Caribbean Dream: Lifestyle Benefits of Cartagena

Explore the incredible lifestyle advantages of owning property in Cartagena, from year-round tropical weather to rich cultural experiences and growing expat community.

*More content here...*
    `
  }
]; 