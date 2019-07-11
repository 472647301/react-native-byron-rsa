module.exports = {
    getEngine: function (keyPair, options) {
        var engine = require('./js.js');
        return engine(keyPair, options);
    }
};