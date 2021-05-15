
class Config {
    default = {
        env: process.env.NODE_ENV,
        api: {
            core: 'http://localhost:5000',

            token: '',
        },
    };

    get config() {
        const core = process.env.REACT_APP_API_CORE || this.default.api.core;

        return {
            dev: core.indexOf('test.') > -1 || core.indexOf('localhost') > -1,
            api: {
                core: process.env.REACT_APP_API_CORE || this.default.api.core,
                token: this.default.token,
            },
        }
    }
}

export default new Config();

