export default class LoggerProvider {
    private _config;
    constructor(config?: any);
    getCategory(): string;
    configure(config: any): any;
    startSession(config: any): Promise<boolean>;
    stopSession(config: any): Promise<boolean>;
    record(params: any, config: any): Promise<boolean>;
}
