/**
 * Created by praveent on 5/2/17.
 */

var landingPage = require('./../pageObjects/landingPage.po.js');
describe('Verify Test Project', function () {
    var mainPage = new landingPage();

    describe('On load', function () {

        beforeEach(function(){
            browser.get('http://localhost:8080');
        });

        it('should load page', function () {
        });
    });

});
