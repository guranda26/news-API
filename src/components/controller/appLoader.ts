import Loader from './loader';

class AppLoader<T> extends Loader<T> {
    constructor() {
        super(process.env.API_URL!, {
            apiKey: process.env.API_KEY!,
        });
    }
}

export default AppLoader;
