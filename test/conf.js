/**
 * Created by praveent on 5/2/17.
 */
// An example configuration file

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var path = require('path');

exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    // multiCapabilities: [{
    //     'browserName': 'firefox'
    // },
    //     {
    //         'browserName': 'chrome'
    //     }],
    onPrepare: function () {
        browser.driver.manage().window().setPosition(0, 0);
        browser.driver.manage().window().setSize(1280, 900);
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './test/reports/',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true
        }));

    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['./e2e/**/*.js']

    highlightDelay: 500
};