if (process.env.NODE_ENV === 'production')
    module.exports = require('./dist/rongcapital.release.js');
else 
    module.exports = require('./dist/rongcapital.dev.js');
