const BasicSearch = require('./search/BasicSearch');

(async _ => {
    try {
        const basic = new BasicSearch();
        let ret = await basic.ping({ requestTimeout: 3000 });
        if (ret) {
            console.log(`Server is up and running correctly!`);
        } else {
            throw new Error('Server is not running...........error....');
        }
        
        const basicResults = await basic.searchByPrice();
        console.log(basicResults);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})()
