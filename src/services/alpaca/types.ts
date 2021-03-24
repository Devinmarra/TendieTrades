export interface ApiConfig {
    appApiKey: string;
    appApiSecret: string;
    dataBaseUrl?: string;
    authClientID?: string;
    authClientSecret?: string;
    authEndpoint?: string;
    tokenEndpoint?: string;
    paperTrading: boolean;
    usePolygon: boolean;
}
