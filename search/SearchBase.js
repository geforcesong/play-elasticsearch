const elasticsearch = require('elasticsearch');

class SearchBase {
    constructor() {
        this.client = new elasticsearch.Client({
            host: 'localhost:9200'

            // log: 'trace'
        });
    }

    async ping(params){
        return this.client.ping(params);
    }
}

module.exports = SearchBase;