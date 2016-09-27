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
                vm.isNew = false;
                vm.showMessage('Información del sistema', 'Creado correctamente');
            },
            function (result) {
                vm.showMessage(result.status, result.statusText);
                vm.new();
            });
        }
        else {
            $http.put('/Kash.JSTSUT.Web/api/Foos/' + vm.Id, { Name: vm.Name, Status: vm.Status }).then(function (req) {
                vm.showMessage('Información del sistema', 'Guardado correctamente');
            },
            function (result) {
                vm.showMessage(result.status, result.statusText);
                vm.new();
            });
        };
    }

    vm.delete = function () {
        var theId = vm.Id;
        $http.delete('/Kash.JSTSUT.Web/api/Foos/' + theId, {}).then(function (req) {
            vm.showMessage('Información del sistema', 'Eliminado correctamente');
            vm.retrieve('previous', theId);
            vm.isNew = false;
        },
        function (result) {
            vm.showMessage(result.status, result.statusText);
            vm.new();
        });
    }

    vm.new = function () {
        vm.Id = 0;
        vm.Name = '';
        vm.Status = '';

        vm.isNew = true;
    }

    vm.retrieve = function (mode, id) {

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
            },
            function (result) {
                vm.showMessage(result.status, result.statusText);
                vm.new();
            });
        },
        function (result) {
            vm.showMessage(result.status, result.statusText);
            vm.new();
        });
    }

    vm.retrieve('first');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImZvb01hbmFnZXJEaXJlY3RpdmUuanMiLCJpbmRleENvbnRyb2xsZXIuanMiLCJtZXNzYWdlTW9kYWxEaXJlY3RpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW10pOyIsImZ1bmN0aW9uIGZvb01hbmFnZXJEaXJlY3RpdmUoKSB7XHJcbiAgICB2YXIgZGlyZWN0aXZlID0ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvdGVtcGxhdGVzL2Zvb01hbmFnZXIuaHRtbCcsXHJcbiAgICAgICAgc2NvcGU6IHt9LFxyXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHt9LFxyXG4gICAgICAgIGxpbms6IGxpbmssXHJcbiAgICAgICAgY29udHJvbGxlcjogRm9vTWFuYWdlckNvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBsaW5rKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xyXG4gICAgICAgICRlbGVtZW50LmF0dHIoJ2lkJywgJGF0dHJzLm1hbmFnZXJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gRm9vTWFuYWdlckNvbnRyb2xsZXIoJGh0dHApIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgdm0uc2hvd01lc3NhZ2UgPSBmdW5jdGlvbiAoc3RhdHVzLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgdm0ubWVzc2FnZVN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB2bS5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICAkKCcjbXNnV2luZG93JykubW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICB2bS5zYXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2bS5pc05ldykge1xyXG4gICAgICAgICAgICAkaHR0cC5wb3N0KCcvS2FzaC5KU1RTVVQuV2ViL2FwaS9Gb29zJywgeyBOYW1lOiB2bS5OYW1lLCBTdGF0dXM6IHZtLlN0YXR1cyB9KS50aGVuKGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgICAgIHZtLklkID0gcmVxLmRhdGEuSWQ7XHJcbiAgICAgICAgICAgICAgICB2bS5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdm0uc2hvd01lc3NhZ2UoJ0luZm9ybWFjacOzbiBkZWwgc2lzdGVtYScsICdDcmVhZG8gY29ycmVjdGFtZW50ZScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB2bS5zaG93TWVzc2FnZShyZXN1bHQuc3RhdHVzLCByZXN1bHQuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB2bS5uZXcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkaHR0cC5wdXQoJy9LYXNoLkpTVFNVVC5XZWIvYXBpL0Zvb3MvJyArIHZtLklkLCB7IE5hbWU6IHZtLk5hbWUsIFN0YXR1czogdm0uU3RhdHVzIH0pLnRoZW4oZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICAgICAgdm0uc2hvd01lc3NhZ2UoJ0luZm9ybWFjacOzbiBkZWwgc2lzdGVtYScsICdHdWFyZGFkbyBjb3JyZWN0YW1lbnRlJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHZtLnNob3dNZXNzYWdlKHJlc3VsdC5zdGF0dXMsIHJlc3VsdC5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgIHZtLm5ldygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZtLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGhlSWQgPSB2bS5JZDtcclxuICAgICAgICAkaHR0cC5kZWxldGUoJy9LYXNoLkpTVFNVVC5XZWIvYXBpL0Zvb3MvJyArIHRoZUlkLCB7fSkudGhlbihmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgICAgIHZtLnNob3dNZXNzYWdlKCdJbmZvcm1hY2nDs24gZGVsIHNpc3RlbWEnLCAnRWxpbWluYWRvIGNvcnJlY3RhbWVudGUnKTtcclxuICAgICAgICAgICAgdm0ucmV0cmlldmUoJ3ByZXZpb3VzJywgdGhlSWQpO1xyXG4gICAgICAgICAgICB2bS5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB2bS5zaG93TWVzc2FnZShyZXN1bHQuc3RhdHVzLCByZXN1bHQuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIHZtLm5ldygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZtLm5ldyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2bS5JZCA9IDA7XHJcbiAgICAgICAgdm0uTmFtZSA9ICcnO1xyXG4gICAgICAgIHZtLlN0YXR1cyA9ICcnO1xyXG5cclxuICAgICAgICB2bS5pc05ldyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdm0ucmV0cmlldmUgPSBmdW5jdGlvbiAobW9kZSwgaWQpIHtcclxuXHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0SWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXJ0SWQgPSB2bS5JZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJldElkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICRodHRwLmdldCgnL0thc2guSlNUU1VULldlYi9hcGkvRm9vcy8nICsgc3RhcnRJZCArICcvJyArIG1vZGUgKyAnSWQnLCB7fSkudGhlbihmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgICAgIHJldElkID0gcmVxLmRhdGE7XHJcbiAgICAgICAgICAgIHZtLmlzTmV3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAkaHR0cC5nZXQoJy9LYXNoLkpTVFNVVC5XZWIvYXBpL0Zvb3MvJyArIHJldElkLCB7fSkudGhlbihmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgICAgICAgICB2bS5JZCA9IHJlcS5kYXRhLklkO1xyXG4gICAgICAgICAgICAgICAgdm0uTmFtZSA9IHJlcS5kYXRhLk5hbWU7XHJcbiAgICAgICAgICAgICAgICB2bS5TdGF0dXMgPSByZXEuZGF0YS5TdGF0dXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHZtLnNob3dNZXNzYWdlKHJlc3VsdC5zdGF0dXMsIHJlc3VsdC5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgIHZtLm5ldygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgdm0uc2hvd01lc3NhZ2UocmVzdWx0LnN0YXR1cywgcmVzdWx0LnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICB2bS5uZXcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2bS5yZXRyaWV2ZSgnZmlyc3QnKTtcclxufVxyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYXBwJylcclxuICAgIC5kaXJlY3RpdmUoJ2Zvb01hbmFnZXInLCBmb29NYW5hZ2VyRGlyZWN0aXZlKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0Zvb01hbmFnZXJDb250cm9sbGVyJywgRm9vTWFuYWdlckNvbnRyb2xsZXIpOyIsImZ1bmN0aW9uIEluZGV4Q29udHJvbGxlcigpIHtcclxufVxyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYXBwJylcclxuICAgIC5jb250cm9sbGVyKCdpbmRleENvbnRyb2xsZXInLCBJbmRleENvbnRyb2xsZXIpOyIsImZ1bmN0aW9uIG1lc3NhZ2VNb2RhbERpcmVjdGl2ZSgpIHtcclxuICAgIHZhciBkaXJlY3RpdmUgPSB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL3RlbXBsYXRlcy9tZXNzYWdlTW9kYWwuaHRtbCcsXG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xyXG4gICAgICAgICAgICBtZXNzYWdlU3RhdHVzOiAnPScsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICc9J1xyXG4gICAgICAgIH0sXG4gICAgICAgIGxpbms6IGxpbmssXHJcbiAgICAgICAgY29udHJvbGxlcjogTWVzc2FnZU1vZGFsQ29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGxpbmsoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XHJcbiAgICAgICAgJGVsZW1lbnQuYXR0cignaWQnLCAkYXR0cnMubW9kYWxJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZU1vZGFsQ29udHJvbGxlcigpIHtcclxufVxyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYXBwJylcclxuICAgIC5kaXJlY3RpdmUoJ21lc3NhZ2VNb2RhbCcsIG1lc3NhZ2VNb2RhbERpcmVjdGl2ZSlcclxuICAgIC5jb250cm9sbGVyKCdNZXNzYWdlTW9kYWxDb250cm9sbGVyJywgTWVzc2FnZU1vZGFsQ29udHJvbGxlcik7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
