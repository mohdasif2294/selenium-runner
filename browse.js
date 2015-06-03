var wd = require('wd');
var async = require('async');

module.exports = browse;

function browse(url, desired, remoteCfg, cb) {
    if (typeof remoteCfg === 'function') {
        cb = remoteCfg;
        remoteCfg = undefined;
    }

    var browser = wd.remote(remoteCfg);

    async.series([
        browser.init.bind(browser, desired),
        //wait4(100),
        browser.get.bind(browser, url)
        //wait4(1000)
    ], function(err) {
        cb(err, browser);
    });
}
