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



//UCE()#################################################################################################




const api = new FullApi('https://api.mysite.com');

// GET so'rovi
api.get('/users')
   .then(response => console.log(response.data))
   .catch(error => console.error(error));

// POST so'rovi
api.post('/users', { name: 'John Doe' })
   .then(response => console.log(response.data))
   .catch(error => console.error(error));

// PUT so'rovi
api.put('/users/1', { name: 'Jane Doe' })
   .then(response => console.log(response.data))
   .catch(error => console.error(error));

// DELETE so'rovi
api.delete('/users/1')
   .then(response => console.log(response.data))
   .catch(error => console.error(error));

