import axios from 'axios';

class FullApi {
    constructor(baseUrl) {
        this.api = axios.create({
            baseURL: baseUrl
        });
    }

    get(url, config = {}) {
        return this.api.get(url, config);
    }

    post(url, data, config = {}) {
        return this.api.post(url, data, config);
    }

    put(url, data, config = {}) {
        return this.api.put(url, data, config);
    }

    delete(url, config = {}) {
        return this.api.delete(url, config);
    }
}

export default FullApi;
