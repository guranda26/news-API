import NewsItem from '../../interface/newsData';
import SourceItem from '../../interface/sourceItem';
import AppLoader from './appLoader';

type NewsCallback = (data: NewsItem[]) => void;
type SourcesCallback = (data: SourceItem[]) => void;

class AppController extends AppLoader<NewsItem[] | SourceItem[]> {
    getSources(callback: SourcesCallback): void {
        super.getResp(
            {
                endpoint: '/sources',
            },
            callback as unknown as (data: NewsItem[] | SourceItem[]) => void
        );
    }

    getNews(e: Event, callback: NewsCallback): void {
        let target = e.target as HTMLElement | null;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: '/everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback as unknown as (data: NewsItem[] | SourceItem[]) => void
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement | null;
        }
    }
}

export default AppController;
