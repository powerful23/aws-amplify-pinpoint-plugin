export default class LoggerProvider {
    private _config;

    constructor(config?) {
        this._config = config? config : {};
    }

    public getCategory() {
        return 'Analytics';
    }

    public configure(config) {
  
        const conf = config? config : {};
        this._config = Object.assign({}, this._config, conf);
        return this._config;
    }

    public async startSession(config) {
        console.log('start Session from Logger provider');
        return true;
    }

    public async stopSession(config) {
        console.log('stop Session from Logger provider');
        return true;
    }

    public async record(params, config) {
        console.log('record from Logger provider');
        return true;
    }
}
