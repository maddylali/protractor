'use strict';

angular
    .module('test.app')
    .controller('MainController',
        function ($scope, $modal) {

            var vm = this;

            vm.userData = usersResponse.data.users;
            vm.addUser = addUser;
            vm.editUser = editUser;

            function addUser() {
                $modal.open({
                    templateUrl: 'partials/add-user-modal.html',
                    controller: 'AddUserCtrl',
                    scope: $scope,
                    resolve: {
                        recordNumber: function () {
                            return -1;
                        }
                    }
                });
            }

            function editUser(recordNumber) {
                $modal.open({
                    templateUrl: 'partials/add-user-modal.html',
                    controller: 'AddUserCtrl',
                    scope: $scope,
                    resolve: {
                        recordNumber: function () {
                            return recordNumber;
                        }
                    }
                });
            }

        });
