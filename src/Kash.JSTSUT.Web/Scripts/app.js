angular.module('app', []);
function fooManagerDirective() {
    var directive = {
        restrict: 'E',
        replace: true,
        templateUrl: 'scripts/templates/fooManager.html',
        scope: {},
        bindToController: {},
        link: link,
        controller: FooManagerController,
        controllerAs: 'vm',
    };

    function link($scope, $element, $attrs) {
        $element.attr('id', $attrs.managerId);
    }

    return directive;
}

function FooManagerController($http) {
    var vm = this;

    vm.showMessage = function (status, message) {
        vm.messageStatus = status;
        vm.message = message;
        $('#msgWindow').modal();
    }

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
    }

    vm.delete = function () {
        var theId = vm.Id;
        $http.delete('/Kash.JSTSUT.Web/api/Foos/' + theId, {}).then(function (req) {
            vm.showMessage('Información del sistema', 'Eliminado correctamente');
            vm.retrieveFoo('previous', theId);
            vm.isNew = false;
        });
    }

    vm.new = function () {
        vm.Id = 0;
        vm.Name = '';
        vm.Status = '';

        vm.isNew = true;
    }

    vm.retrieveFoo = function (mode, id) {
        if (id) {
            startId = id;
        }
        else {
            startId = vm.Id;
        }
        var retId = undefined;
        $http.get('/Kash.JSTSUT.Web/api/Foos/' + startId + '/' + mode + 'Id', {}).then(function (req) {
            retId = req.data;
            vm.isNew = false;

            $http.get('/Kash.JSTSUT.Web/api/Foos/' + retId, {}).then(function (req) {
                vm.Id = req.data.Id;
                vm.Name = req.data.Name;
                vm.Status = req.data.Status;
            });
        },
        function (result) {
            vm.showMessage(result.status, result.statusText);
            vm.new();
        });
    }

    vm.retrieveFoo('first');
}

angular
    .module('app')
    .directive('fooManager', fooManagerDirective)
    .controller('FooManagerController', FooManagerController);
function IndexController() {
}

angular
    .module('app')
    .controller('indexController', IndexController);
function messageModalDirective() {
    var directive = {
        restrict: 'E',
        replace: true,
        templateUrl: 'scripts/templates/messageModal.html',
        scope: {},
        bindToController: {
            messageStatus: '=',
            message: '='
        },
        link: link,
        controller: MessageModalController,
        controllerAs: 'vm',
    };

    function link($scope, $element, $attrs) {
        $element.attr('id', $attrs.modalId);
    }

    return directive;
}

function MessageModalController() {
}

angular
    .module('app')
    .directive('messageModal', messageModalDirective)
    .controller('MessageModalController', MessageModalController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImZvb01hbmFnZXJEaXJlY3RpdmUuanMiLCJpbmRleENvbnRyb2xsZXIuanMiLCJtZXNzYWdlTW9kYWxEaXJlY3RpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW10pOyIsImZ1bmN0aW9uIGZvb01hbmFnZXJEaXJlY3RpdmUoKSB7XHJcbiAgICB2YXIgZGlyZWN0aXZlID0ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvdGVtcGxhdGVzL2Zvb01hbmFnZXIuaHRtbCcsXHJcbiAgICAgICAgc2NvcGU6IHt9LFxyXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHt9LFxyXG4gICAgICAgIGxpbms6IGxpbmssXHJcbiAgICAgICAgY29udHJvbGxlcjogRm9vTWFuYWdlckNvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBsaW5rKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xyXG4gICAgICAgICRlbGVtZW50LmF0dHIoJ2lkJywgJGF0dHJzLm1hbmFnZXJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gRm9vTWFuYWdlckNvbnRyb2xsZXIoJGh0dHApIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgdm0uc2hvd01lc3NhZ2UgPSBmdW5jdGlvbiAoc3RhdHVzLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgdm0ubWVzc2FnZVN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB2bS5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICAkKCcjbXNnV2luZG93JykubW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICB2bS5zYXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2bS5pc05ldykge1xyXG4gICAgICAgICAgICAkaHR0cC5wb3N0KCcvS2FzaC5KU1RTVVQuV2ViL2FwaS9Gb29zJywgeyBOYW1lOiB2bS5OYW1lLCBTdGF0dXM6IHZtLlN0YXR1cyB9KS50aGVuKGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgICAgIHZtLklkID0gcmVxLmRhdGEuSWQ7XHJcbiAgICAgICAgICAgICAgICB2bS5zaG93TWVzc2FnZSgnSW5mb3JtYWNpw7NuIGRlbCBzaXN0ZW1hJywgJ0NyZWFkbyBjb3JyZWN0YW1lbnRlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgJGh0dHAucHV0KCcvS2FzaC5KU1RTVVQuV2ViL2FwaS9Gb29zLycgKyB2bS5JZCwgeyBOYW1lOiB2bS5OYW1lLCBTdGF0dXM6IHZtLlN0YXR1cyB9KS50aGVuKGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgICAgIHZtLnNob3dNZXNzYWdlKCdJbmZvcm1hY2nDs24gZGVsIHNpc3RlbWEnLCAnR3VhcmRhZG8gY29ycmVjdGFtZW50ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZtLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGhlSWQgPSB2bS5JZDtcclxuICAgICAgICAkaHR0cC5kZWxldGUoJy9LYXNoLkpTVFNVVC5XZWIvYXBpL0Zvb3MvJyArIHRoZUlkLCB7fSkudGhlbihmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgICAgIHZtLnNob3dNZXNzYWdlKCdJbmZvcm1hY2nDs24gZGVsIHNpc3RlbWEnLCAnRWxpbWluYWRvIGNvcnJlY3RhbWVudGUnKTtcclxuICAgICAgICAgICAgdm0ucmV0cmlldmVGb28oJ3ByZXZpb3VzJywgdGhlSWQpO1xyXG4gICAgICAgICAgICB2bS5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZtLm5ldyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2bS5JZCA9IDA7XHJcbiAgICAgICAgdm0uTmFtZSA9ICcnO1xyXG4gICAgICAgIHZtLlN0YXR1cyA9ICcnO1xyXG5cclxuICAgICAgICB2bS5pc05ldyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdm0ucmV0cmlldmVGb28gPSBmdW5jdGlvbiAobW9kZSwgaWQpIHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgc3RhcnRJZCA9IGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3RhcnRJZCA9IHZtLklkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmV0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgJGh0dHAuZ2V0KCcvS2FzaC5KU1RTVVQuV2ViL2FwaS9Gb29zLycgKyBzdGFydElkICsgJy8nICsgbW9kZSArICdJZCcsIHt9KS50aGVuKGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgcmV0SWQgPSByZXEuZGF0YTtcclxuICAgICAgICAgICAgdm0uaXNOZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICRodHRwLmdldCgnL0thc2guSlNUU1VULldlYi9hcGkvRm9vcy8nICsgcmV0SWQsIHt9KS50aGVuKGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgICAgIHZtLklkID0gcmVxLmRhdGEuSWQ7XHJcbiAgICAgICAgICAgICAgICB2bS5OYW1lID0gcmVxLmRhdGEuTmFtZTtcclxuICAgICAgICAgICAgICAgIHZtLlN0YXR1cyA9IHJlcS5kYXRhLlN0YXR1cztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHZtLnNob3dNZXNzYWdlKHJlc3VsdC5zdGF0dXMsIHJlc3VsdC5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgdm0ubmV3KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdm0ucmV0cmlldmVGb28oJ2ZpcnN0Jyk7XHJcbn1cclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAuZGlyZWN0aXZlKCdmb29NYW5hZ2VyJywgZm9vTWFuYWdlckRpcmVjdGl2ZSlcclxuICAgIC5jb250cm9sbGVyKCdGb29NYW5hZ2VyQ29udHJvbGxlcicsIEZvb01hbmFnZXJDb250cm9sbGVyKTsiLCJmdW5jdGlvbiBJbmRleENvbnRyb2xsZXIoKSB7XHJcbn1cclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAuY29udHJvbGxlcignaW5kZXhDb250cm9sbGVyJywgSW5kZXhDb250cm9sbGVyKTsiLCJmdW5jdGlvbiBtZXNzYWdlTW9kYWxEaXJlY3RpdmUoKSB7XHJcbiAgICB2YXIgZGlyZWN0aXZlID0ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy90ZW1wbGF0ZXMvbWVzc2FnZU1vZGFsLmh0bWwnLFxuICAgICAgICBzY29wZToge30sXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcclxuICAgICAgICAgICAgbWVzc2FnZVN0YXR1czogJz0nLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnPSdcclxuICAgICAgICB9LFxuICAgICAgICBsaW5rOiBsaW5rLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IE1lc3NhZ2VNb2RhbENvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBsaW5rKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xyXG4gICAgICAgICRlbGVtZW50LmF0dHIoJ2lkJywgJGF0dHJzLm1vZGFsSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaXJlY3RpdmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VNb2RhbENvbnRyb2xsZXIoKSB7XHJcbn1cclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAuZGlyZWN0aXZlKCdtZXNzYWdlTW9kYWwnLCBtZXNzYWdlTW9kYWxEaXJlY3RpdmUpXHJcbiAgICAuY29udHJvbGxlcignTWVzc2FnZU1vZGFsQ29udHJvbGxlcicsIE1lc3NhZ2VNb2RhbENvbnRyb2xsZXIpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
