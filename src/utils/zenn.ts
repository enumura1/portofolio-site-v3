type ZennArticle = {
  id: number;
  post_type: string;
  title: string;
  slug: string;
  published_at: string;
  liked_count: number;
  body_letters_count: number;
  article_type: string;
  emoji: string;
  user: {
    username: string;
    name: string;
  };
}

type ZennApiResponse = {
  articles: ZennArticle[];
}

export interface ZennArticleDisplay {
  id: string;
  title: string;
  url: string;
  created_at: string;
  emoji: string;
}

export async function fetchZennArticles(): Promise<ZennArticleDisplay[]> {
  try {
    const response = await fetch(
      'https://zenn.dev/api/articles?username=enumura&order=latest',
      {
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Zenn articles');
    }

    const data: ZennApiResponse = await response.json();
    
    return data.articles.slice(0, 5).map(article => ({
      id: article.id.toString(),
      title: article.title,
      url: `https://zenn.dev/enumura1/articles/${article.slug}`,
      created_at: article.published_at,
      emoji: article.emoji
    }));
  } catch (error) {
    console.error('Error fetching Zenn articles:', error);
    return [];
  }
}
