angular.module('app', []);
angular
    .module('app')
    .controller('indexController', IndexController);

function IndexController($http) {
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
        $http.delete('/Kash.JSTSUT.Web/api/Foos/' + vm.Id, {}).then(function (req) {
            vm.showMessage('Información del sistema', 'Eliminado correctamente');
            vm.retrieveFoo('first');
            vm.isNew = false;
            vm.retrieveFoo('previous');
        });
    }

    vm.new = function () {
        vm.Id = 0;
        vm.Name = '';
        vm.Status = '';

        vm.isNew = true;
    }

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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImluZGV4Q29udHJvbGxlci5qcyIsIm1lc3NhZ2VNb2RhbERpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW10pOyIsImFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAuY29udHJvbGxlcignaW5kZXhDb250cm9sbGVyJywgSW5kZXhDb250cm9sbGVyKTtcclxuXHJcbmZ1bmN0aW9uIEluZGV4Q29udHJvbGxlcigkaHR0cCkge1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICB2bS5zaG93TWVzc2FnZSA9IGZ1bmN0aW9uIChzdGF0dXMsIG1lc3NhZ2UpIHtcclxuICAgICAgICB2bS5tZXNzYWdlU3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIHZtLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgICAgICQoJyNtc2dXaW5kb3cnKS5tb2RhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZtLnNhdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLmlzTmV3KSB7XHJcbiAgICAgICAgICAgICRodHRwLnBvc3QoJy9LYXNoLkpTVFNVVC5XZWIvYXBpL0Zvb3MnLCB7IE5hbWU6IHZtLk5hbWUsIFN0YXR1czogdm0uU3RhdHVzIH0pLnRoZW4oZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICAgICAgdm0uSWQgPSByZXEuZGF0YS5JZDtcclxuICAgICAgICAgICAgICAgIHZtLnNob3dNZXNzYWdlKCdJbmZvcm1hY2nDs24gZGVsIHNpc3RlbWEnLCAnQ3JlYWRvIGNvcnJlY3RhbWVudGUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkaHR0cC5wdXQoJy9LYXNoLkpTVFNVVC5XZWIvYXBpL0Zvb3MvJyArIHZtLklkLCB7IE5hbWU6IHZtLk5hbWUsIFN0YXR1czogdm0uU3RhdHVzIH0pLnRoZW4oZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICAgICAgdm0uc2hvd01lc3NhZ2UoJ0luZm9ybWFjacOzbiBkZWwgc2lzdGVtYScsICdHdWFyZGFkbyBjb3JyZWN0YW1lbnRlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdm0uZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRodHRwLmRlbGV0ZSgnL0thc2guSlNUU1VULldlYi9hcGkvRm9vcy8nICsgdm0uSWQsIHt9KS50aGVuKGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICAgICAgdm0uc2hvd01lc3NhZ2UoJ0luZm9ybWFjacOzbiBkZWwgc2lzdGVtYScsICdFbGltaW5hZG8gY29ycmVjdGFtZW50ZScpO1xyXG4gICAgICAgICAgICB2bS5yZXRyaWV2ZUZvbygnZmlyc3QnKTtcclxuICAgICAgICAgICAgdm0uaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdm0ucmV0cmlldmVGb28oJ3ByZXZpb3VzJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdm0ubmV3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZtLklkID0gMDtcclxuICAgICAgICB2bS5OYW1lID0gJyc7XHJcbiAgICAgICAgdm0uU3RhdHVzID0gJyc7XHJcblxyXG4gICAgICAgIHZtLmlzTmV3ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB2bS5yZXRyaWV2ZUZvbyA9IGZ1bmN0aW9uIChtb2RlKSB7XHJcbiAgICAgICAgdmFyIHRoZUlkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICRodHRwLmdldCgnL0thc2guSlNUU1VULldlYi9hcGkvRm9vcy8nICsgdm0uSWQgKyAnLycgKyBtb2RlICsgJ0lkJywge30pLnRoZW4oZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICB0aGVJZCA9IHJlcS5kYXRhO1xyXG4gICAgICAgICAgICB2bS5pc05ldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJGh0dHAuZ2V0KCcvS2FzaC5KU1RTVVQuV2ViL2FwaS9Gb29zLycgKyB0aGVJZCwge30pLnRoZW4oZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICAgICAgdm0uSWQgPSByZXEuZGF0YS5JZDtcclxuICAgICAgICAgICAgICAgIHZtLk5hbWUgPSByZXEuZGF0YS5OYW1lO1xyXG4gICAgICAgICAgICAgICAgdm0uU3RhdHVzID0gcmVxLmRhdGEuU3RhdHVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgdm0uc2hvd01lc3NhZ2UocmVzdWx0LnN0YXR1cywgcmVzdWx0LnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICB2bS5uZXcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImZ1bmN0aW9uIG1lc3NhZ2VNb2RhbERpcmVjdGl2ZSgpIHtcclxuICAgIHZhciBkaXJlY3RpdmUgPSB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL3RlbXBsYXRlcy9tZXNzYWdlTW9kYWwuaHRtbCcsXG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xyXG4gICAgICAgICAgICBtZXNzYWdlU3RhdHVzOiAnPScsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICc9J1xyXG4gICAgICAgIH0sXG4gICAgICAgIGxpbms6IGxpbmssXHJcbiAgICAgICAgY29udHJvbGxlcjogTWVzc2FnZU1vZGFsQ29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGxpbmsoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XHJcbiAgICAgICAgJGVsZW1lbnQuYXR0cignaWQnLCAkYXR0cnMubW9kYWxJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZU1vZGFsQ29udHJvbGxlcigpIHtcclxufVxyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYXBwJylcclxuICAgIC5kaXJlY3RpdmUoJ21lc3NhZ2VNb2RhbCcsIG1lc3NhZ2VNb2RhbERpcmVjdGl2ZSlcclxuICAgIC5jb250cm9sbGVyKCdNZXNzYWdlTW9kYWxDb250cm9sbGVyJywgTWVzc2FnZU1vZGFsQ29udHJvbGxlcik7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
