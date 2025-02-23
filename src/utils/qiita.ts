type QiitaArticle = {
  id: string;
  title: string;
  url: string;
  created_at: string;
  likes_count: number;
}

export async function fetchQiitaArticles(): Promise<QiitaArticle[]> {
  const response = await fetch(
    'https://qiita.com/api/v2/items?query=user:enumura1',
    {
      headers: {
        'Authorization': `Bearer ${process.env.QIITA_ACCESS_TOKEN}`,
      },
      next: { revalidate: 3600 }
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch Qiita articles');
  }

  const articles = await response.json();
  return articles.slice(0, 5);
}
