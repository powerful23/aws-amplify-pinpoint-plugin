export default class GAProvider {
    private _config;
    private _gtag;
    private _inited;

    constructor(config?) {
        this._config = config? config : {};
        this._gtag = null;
        this._inited = false;
        this._initGTag = this._initGTag.bind(this);
    }

    public getCategory() {
        return 'Analytics';
    }

    public configure(config) {
        const conf = config? config : {};
        this._config = Object.assign({}, this._config, conf);
        console.log(this._config);
        this._init(this._config);
        return this._config;
    }

    public async startSession(config) {
        if (!this._gtag) {
            const initClients = this._init(config);
            if (!initClients) return false;
            return true
        }
        console.log('start Session from GA');
        this._gtag('event', 'start_session');
        return true;
    }

    public async stopSession(config) {
        if (!this._gtag) {
            const initClients = this._init(config);
            if (!initClients) return false;
            // add it into buffer
            return true;
        }
        console.log('stop Session from GA');
        this._gtag('event', 'stop_session');
        return true;
    }

    public async record(params, config) {
        if (!this._gtag) {
            const initClients = this._init(config);
            if (!initClients) return false;
            return true;
        }
        console.log('record from GA');
        const { eventName, attributes, metrics } = params;
        this._gtag('event', eventName);
        return true;
    }

    private _init(config) {
        this._config = Object.assign(this._config, config);
        if (!this._config.GATrackingId) return false;
        if ( !this._inited ) this._createScript();
        return true;
    }

    private _createScript() {
        const script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id=" + this._config.GATrackingId;
        script.async = true;
        script.onload = this._initGTag;
        document.head.appendChild(script);
        this._inited = true;
    }

    private _initGTag() {
        const { GATrackingId } = this._config;
        window['dataLayer'] = window['dataLayer'] || [];
        const gtag = function(...args) {
            window['dataLayer'].push(arguments);
        }
        gtag('js', new Date());
        gtag('config', GATrackingId);
        this._gtag = gtag;
    }
}
