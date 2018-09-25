const SearchBase = require('./SearchBase');
class BasicSearch extends SearchBase {
    constructor() {
        super();
    }

    async searchByPrice() {
        const results = await this.client.search({
            index: 'my_store',
            type: 'products',
            body: {
                query: {
                    term: {
                        price: 30
                    }
                }
            }
        });
        return results;
    }

    async searchByFirstAndLastName() {
        const results = await this.client.search({
            index: 'accounts',
            type: 'person',
            body: {
                query: {
                    bool: {
                        must: [
                            { match: { last_name: 'wang' } },
                            { match: { first_name: 'bob' } }
                        ]
                    }
                }
            }
        });
        return results;
    }
}

module.exports = BasicSearch;