angular.module('app').controller('indexController', function ($http) {
    var vm = this;

    vm.save = function () {
        $http.post('/Kash.JSTSUT.Web/api/Foos', { Name: vm.Name, Status: vm.Status }).then(function (req) {
                vm.Name = req.data.Name;
                vm.Status = req.data.Status;
            });
    };

    vm.init = function () {
        vm.Name = "Kash";
        vm.Status = "Testing";
    };
});