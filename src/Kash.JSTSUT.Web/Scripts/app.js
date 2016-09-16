angular.module('app', []);
angular.module('app').controller('indexController', function ($http) {
    var vm = this;

    vm.showMessage = function (status, message) {
        vm.messageStatus = status;
        vm.message = message;
        $('#msgWindow').modal();
    };

    vm.save = function () {
        if (vm.isNew) {
            $http.post('/Kash.JSTSUT.Web/api/Foos', { Name: vm.Name, Status: vm.Status }).then(function (req) {
                vm.Id = req.data.Id;
                vm.showMessage('Información del sistema', 'Creado correctamente');
            });
        }
        else {
            $http.put('/Kash.JSTSUT.Web/api/Foos/' + vm.Id, { Name: vm.Name, Status: vm.Status }).then(function (req) {
                vm.showMessage('Información del sistema', 'Guardado correctamente');
            });
        };
    };

    vm.delete = function () {
        $http.delete('/Kash.JSTSUT.Web/api/Foos/' + vm.Id, {}).then(function (req) {
            vm.showMessage('Información del sistema', 'Eliminado correctamente');
            vm.retrieveFoo('first');
            vm.isNew = false;
            vm.retrieveFoo('previous');
        });
    };

    vm.new = function () {
        vm.Id = 0;
        vm.Name = '';
        vm.Status = '';

        vm.isNew = true;
    };

    vm.retrieveFoo = function (mode) {
        var theId = undefined;
        $http.get('/Kash.JSTSUT.Web/api/Foos/' + vm.Id + '/' + mode + 'Id', {}).then(function (req) {
            theId = req.data;
            vm.isNew = false;

            $http.get('/Kash.JSTSUT.Web/api/Foos/' + theId, {}).then(function (req) {
                vm.Id = req.data.Id;
                vm.Name = req.data.Name;
                vm.Status = req.data.Status;
            });
        },
        function (result) {
            vm.showMessage(result.status, result.statusText);
            vm.new();
        });
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImluZGV4Q29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ2luZGV4Q29udHJvbGxlcicsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICB2bS5zaG93TWVzc2FnZSA9IGZ1bmN0aW9uIChzdGF0dXMsIG1lc3NhZ2UpIHtcclxuICAgICAgICB2bS5tZXNzYWdlU3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIHZtLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgICAgICQoJyNtc2dXaW5kb3cnKS5tb2RhbCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2bS5zYXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2bS5pc05ldykge1xyXG4gICAgICAgICAgICAkaHR0cC5wb3N0KCcvS2FzaC5KU1RTVVQuV2ViL2FwaS9Gb29zJywgeyBOYW1lOiB2bS5OYW1lLCBTdGF0dXM6IHZtLlN0YXR1cyB9KS50aGVuKGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgICAgIHZtLklkID0gcmVxLmRhdGEuSWQ7XHJcbiAgICAgICAgICAgICAgICB2bS5zaG93TWVzc2FnZSgnSW5mb3JtYWNpw7NuIGRlbCBzaXN0ZW1hJywgJ0NyZWFkbyBjb3JyZWN0YW1lbnRlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgJGh0dHAucHV0KCcvS2FzaC5KU1RTVVQuV2ViL2FwaS9Gb29zLycgKyB2bS5JZCwgeyBOYW1lOiB2bS5OYW1lLCBTdGF0dXM6IHZtLlN0YXR1cyB9KS50aGVuKGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgICAgIHZtLnNob3dNZXNzYWdlKCdJbmZvcm1hY2nDs24gZGVsIHNpc3RlbWEnLCAnR3VhcmRhZG8gY29ycmVjdGFtZW50ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2bS5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGh0dHAuZGVsZXRlKCcvS2FzaC5KU1RTVVQuV2ViL2FwaS9Gb29zLycgKyB2bS5JZCwge30pLnRoZW4oZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICB2bS5zaG93TWVzc2FnZSgnSW5mb3JtYWNpw7NuIGRlbCBzaXN0ZW1hJywgJ0VsaW1pbmFkbyBjb3JyZWN0YW1lbnRlJyk7XHJcbiAgICAgICAgICAgIHZtLnJldHJpZXZlRm9vKCdmaXJzdCcpO1xyXG4gICAgICAgICAgICB2bS5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2bS5yZXRyaWV2ZUZvbygncHJldmlvdXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdm0ubmV3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZtLklkID0gMDtcclxuICAgICAgICB2bS5OYW1lID0gJyc7XHJcbiAgICAgICAgdm0uU3RhdHVzID0gJyc7XHJcblxyXG4gICAgICAgIHZtLmlzTmV3ID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgdm0ucmV0cmlldmVGb28gPSBmdW5jdGlvbiAobW9kZSkge1xyXG4gICAgICAgIHZhciB0aGVJZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAkaHR0cC5nZXQoJy9LYXNoLkpTVFNVVC5XZWIvYXBpL0Zvb3MvJyArIHZtLklkICsgJy8nICsgbW9kZSArICdJZCcsIHt9KS50aGVuKGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgdGhlSWQgPSByZXEuZGF0YTtcclxuICAgICAgICAgICAgdm0uaXNOZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICRodHRwLmdldCgnL0thc2guSlNUU1VULldlYi9hcGkvRm9vcy8nICsgdGhlSWQsIHt9KS50aGVuKGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgICAgIHZtLklkID0gcmVxLmRhdGEuSWQ7XHJcbiAgICAgICAgICAgICAgICB2bS5OYW1lID0gcmVxLmRhdGEuTmFtZTtcclxuICAgICAgICAgICAgICAgIHZtLlN0YXR1cyA9IHJlcS5kYXRhLlN0YXR1cztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHZtLnNob3dNZXNzYWdlKHJlc3VsdC5zdGF0dXMsIHJlc3VsdC5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgdm0ubmV3KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
