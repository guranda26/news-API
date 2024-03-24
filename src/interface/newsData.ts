interface Source {
    id: string | null;
    name: string;
}

interface NewsItem {
    source: Source;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

export default NewsItem;
