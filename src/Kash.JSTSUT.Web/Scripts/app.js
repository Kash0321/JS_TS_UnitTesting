angular.module('app', []);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImluZGV4Q29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW10pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdpbmRleENvbnRyb2xsZXInLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgdm0uc2F2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkaHR0cC5wb3N0KCcvS2FzaC5KU1RTVVQuV2ViL2FwaS9Gb29zJywgeyBOYW1lOiB2bS5OYW1lLCBTdGF0dXM6IHZtLlN0YXR1cyB9KS50aGVuKGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgICAgIHZtLk5hbWUgPSByZXEuZGF0YS5OYW1lO1xyXG4gICAgICAgICAgICAgICAgdm0uU3RhdHVzID0gcmVxLmRhdGEuU3RhdHVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdm0uaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2bS5OYW1lID0gXCJLYXNoXCI7XHJcbiAgICAgICAgdm0uU3RhdHVzID0gXCJUZXN0aW5nXCI7XHJcbiAgICB9O1xyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
