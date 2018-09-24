const elasticsearch = require('elasticsearch');

(async _ => {
    try {
        const client = new elasticsearch.Client({
            host: 'localhost:9200'
            // log: 'trace'
        });
        let ret = await client.ping({ requestTimeout: 3000 });
        if (ret) {
            console.log(`Server is up and running correctly!`);
        } else {
            throw new Error('Server is not running...........error....');
        }
        let results = await client.search({
            index: 'accounts',
            type: 'person',
            body: {
                query: {
                    term: {
                        last_name: 'wang'
                    }
                }
            }
        });
        console.log(results);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})()
