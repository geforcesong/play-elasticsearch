const SearchBase = require('./SearchBase');
class BasicSearch extends SearchBase {
    constructor() {
        super();
    }

    async searchByPrice(){
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
}

module.exports = BasicSearch;