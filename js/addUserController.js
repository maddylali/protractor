'use strict';

angular
    .module('test.app')
    .controller('AddUserCtrl',
    function ($scope, $modalInstance, uuid4, recordNumber) {
        var id;

        $scope.onOk = function () {
            var newUser = {
                id: id,
                first_name: $scope.firstName,
                last_name: $scope.lastName,
                email: $scope.email,
                is_suspended: false,
                password: $scope.password,
                confirmPassword: $scope.confirmPassword
            };

            if (recordNumber >= 0) {
                $scope.vm.userData[recordNumber] = newUser;
            } else {
                $scope.vm.userData.push(newUser);
            }
            $modalInstance.dismiss();
        };

        $scope.cancel = function () {
            $modalInstance.close();
        };

        function init() {
            id = uuid4.generate();
            $scope.isAdd = recordNumber === -1;
            if(recordNumber >= 0) {
                $scope.firstName = $scope.vm.userData[recordNumber].first_name;
                $scope.lastName = $scope.vm.userData[recordNumber].last_name;
                $scope.email = $scope.vm.userData[recordNumber].email;
                $scope.password = $scope.vm.userData[recordNumber].password;
                $scope.confirmPassword = $scope.vm.userData[recordNumber].confirmPassword;
                id = $scope.vm.userData[recordNumber].id;
            }
        }

        //Initialize
        init();

    });
