import NewsItem from '../../interface/newsData';
import SourceItem from '../../interface/sourceItem';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesElement = document.querySelector('.sources');
        if (sourcesElement) {
            sourcesElement.addEventListener('click', (event: Event) => {
                this.controller.getNews(event as MouseEvent, (data: NewsItem[]) => this.view.drawNews(data));
            });
        }
        this.controller.getSources((data: SourceItem[]) => this.view.drawSources(data));
    }
}

export default App;
