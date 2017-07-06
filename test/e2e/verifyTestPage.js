/**
 * Created by praveent on 5/2/17.
 */

var landingPage = require('./../pageObjects/landingPage.po.js');
describe('Verify Test Project', function () {
    var mainPage = new landingPage();

    describe('On load', function () {

        beforeEach(function(){
            browser.get(mainPage.mainUrl);
            browser.waitForAngular();
        });

        it('should load page', function () {
            expect(mainPage.userData.count()).toBe(4);
        });

        it('should contain first name', function() {
            expect(mainPage.firstNameColumnData.getText()).toMatch('John');
        });

        it('should add new user', function(){
            mainPage.addUserButton.click();
            mainPage.email.sendKeys('a@a.com');
            mainPage.firstName.sendKeys('Training');
            mainPage.lastName.sendKeys('Training');
            mainPage.password.sendKeys('123456789');
            mainPage.confirmPassword.sendKeys('123456789');
            mainPage.addUserSaveButton.click();

            expect(mainPage.userData.count()).toBe(5);
            expect(mainPage.firstNameColumnData.getText()).toMatch('Training');
        });

        it('should not add user on cancelling add user', function(){
            mainPage.addUserButton.click();
            mainPage.email.sendKeys('a@a.com');
            mainPage.firstName.sendKeys('Training');
            mainPage.lastName.sendKeys('Training');
            mainPage.password.sendKeys('123456789');
            mainPage.confirmPassword.sendKeys('123456789');
            mainPage.addUserCancelButton.click();

            expect(mainPage.userData.count()).toBe(4);
            expect(mainPage.firstNameColumnData.getText()).not.toMatch('Training');
        });

        it('should open edit window with data on clicking edit button', function(){
            expect(mainPage.editButtonList.count()).toBe(4);
            mainPage.editButtonList.get(0).click();
            expect(mainPage.firstName.getAttribute('value')).toBe('Foo');
        });

        it('should successfully edit user info', function(){
            mainPage.editButtonList.get(0).click();
            mainPage.firstName.clear();
            mainPage.firstName.sendKeys('Foo New');
            mainPage.password.sendKeys('123456789');
            mainPage.confirmPassword.sendKeys('123456789');
            mainPage.addUserSaveButton.click();
            expect(mainPage.firstNameColumnData.getText()).toMatch('Foo New');
        });
        
    });

});
