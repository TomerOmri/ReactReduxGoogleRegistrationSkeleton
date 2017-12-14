if (process.env.NODE_ENV === 'production'){
    // run the production set of keys
    module.exports = require('./prod');
} else {
    // run dev
    module.exports = require('./dev');
}