angular.module('app').controller('indexController', function ($http) {
    var vm = this;

    vm.Save = function () {
            $http.post('/url', {}).then(function (req) {
                vm.Name = req.data.Name;
                vm.Status = req.data.Status;
            });
        };
    vm.FillDataForTests = function () {
        vm.Name = "Kash";
        vm.Status = "Testing";
    };
});