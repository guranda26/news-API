import SourceItem from '../../../interface/sourceItem';
import './sources.css';

class Sources {
    public draw(data: SourceItem[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item: SourceItem) => {
            if (!sourceItemTemp) {
                console.error('sourceItemTemp template is null');
                return;
            }
            const sourceClone: DocumentFragment = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const itemNameElement: Element | null = sourceClone.querySelector('.source__item-name');
            if (itemNameElement) {
                itemNameElement.textContent = item.name;
            }

            const itemElement: Element | null = sourceClone.querySelector('.source__item');
            if (itemElement) {
                itemElement.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesElement: Element | null = document.querySelector('.sources');
        if (sourcesElement) {
            sourcesElement.append(fragment);
        } else {
            console.error('.sources element not found');
        }
    }
}

export default Sources;
