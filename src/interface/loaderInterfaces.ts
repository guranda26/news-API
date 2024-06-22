interface LoaderOptions {
    [key: string]: string;
}

interface EndpointRequest {
    endpoint: string;
    options?: LoaderOptions;
}

export type { LoaderOptions, EndpointRequest };
