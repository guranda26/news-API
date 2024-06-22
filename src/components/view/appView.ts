import NewsItem from '../../interface/newsData';
import SourceItem from '../../interface/sourceItem';
import News from './news/news';
import Sources from './sources/sources';

interface NewsData {
    articles: NewsItem[];
}
interface SourcesData {
    sources: SourceItem[];
}

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsData | NewsItem[]): void {
        let values: NewsItem[];
        if (Array.isArray(data)) {
            values = data;
        } else {
            values = data.articles ?? [];
        }
        this.news.draw(values);
    }

    drawSources(data: SourcesData | SourceItem[]): void {
        let values: SourceItem[];
        if (Array.isArray(data)) {
            values = data;
        } else {
            values = data.sources ?? [];
        }
        this.sources.draw(values);
    }
}

export default AppView;
