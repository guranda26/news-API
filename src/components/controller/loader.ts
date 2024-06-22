import { EndpointRequest, LoaderOptions } from '../../interface/loaderInterfaces';

type CallbackFunction<T> = (data: T) => void;

class Loader<T> {
    private baseLink: string;
    private readonly options: Readonly<LoaderOptions>;

    constructor(baseLink: string, options: LoaderOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: EndpointRequest,
        callback: CallbackFunction<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404) {
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            }
            throw new Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: Partial<LoaderOptions>, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            const value = urlOptions[key];
            if (value !== undefined) {
                url += `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}&`;
            }
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: CallbackFunction<T>, options: Partial<LoaderOptions> = {}): void {
        const url = this.makeUrl(options, endpoint);
        console.log(`Requesting news for source: ${url}`);
        fetch(url, { method })
            .then(this.errorHandler.bind(this))
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
