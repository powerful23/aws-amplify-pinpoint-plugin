export default class GAProvider {
    private _config;
    private _gtag;
    private _inited;
    constructor(config?: any);
    getCategory(): string;
    configure(config: any): any;
    startSession(config: any): Promise<boolean>;
    stopSession(config: any): Promise<boolean>;
    record(params: any, config: any): Promise<boolean>;
    private _init(config);
    private _createScript();
    private _initGTag();
}
