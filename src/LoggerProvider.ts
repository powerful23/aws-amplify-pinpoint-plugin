export default class LoggerProvider {
    private _config;

    constructor(config?) {
        this._config = config? config : {};
    }

    public getCategory() {
        return 'Analytics';
    }

    public getProviderName() {
        return 'provider';
    }

    public configure(config) {
        const conf = config? config : {};
        this._config = Object.assign({}, this._config, conf);
        return this._config;
    }

    public async record(params): Promise<boolean> {
        console.log('record from Logger provider with params', params);
        // if success
        return true;
    }
}
