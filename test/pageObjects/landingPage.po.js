/**
 * Created by praveent on 5/3/17.
 */
module.exports = function () {
    this.mainUrl = 'http://localhost:8082/';
    this.addUserButton = element(by.buttonText('Add User'));
    this.userData = element.all(by.repeater('user in vm.userData'));
    this.firstNameColumnData = element.all(by.repeater('user in vm.userData').column('first_name'));
    this.addUserSaveButton = element(by.buttonText('Submit'));
    this.email = element(by.model('email'));
    this.firstName= element(by.model('firstName'));
    this.lastName = element(by.model('lastName'));
    this.password= element(by.model('password'));
    this.confirmPassword = element(by.model('confirmPassword'));
    this.addUserCancelButton = element(by.buttonText('Cancel'));
    this.editButtonList = element.all(by.buttonText('Edit'));

};