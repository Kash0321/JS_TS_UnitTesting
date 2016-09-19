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
function messageModalDirective() {
    var directive = {
        restrict: 'E',
        replace: true,
        templateUrl: 'scripts/views/messageModal.html',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImluZGV4Q29udHJvbGxlci5qcyIsIm1lc3NhZ2VNb2RhbERpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignaW5kZXhDb250cm9sbGVyJywgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG5cclxuICAgIHZtLnNob3dNZXNzYWdlID0gZnVuY3Rpb24gKHN0YXR1cywgbWVzc2FnZSkge1xyXG4gICAgICAgIHZtLm1lc3NhZ2VTdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgdm0ubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgJCgnI21zZ1dpbmRvdycpLm1vZGFsKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZtLnNhdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHZtLmlzTmV3KSB7XHJcbiAgICAgICAgICAgICRodHRwLnBvc3QoJy9LYXNoLkpTVFNVVC5XZWIvYXBpL0Zvb3MnLCB7IE5hbWU6IHZtLk5hbWUsIFN0YXR1czogdm0uU3RhdHVzIH0pLnRoZW4oZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICAgICAgdm0uSWQgPSByZXEuZGF0YS5JZDtcclxuICAgICAgICAgICAgICAgIHZtLnNob3dNZXNzYWdlKCdJbmZvcm1hY2nDs24gZGVsIHNpc3RlbWEnLCAnQ3JlYWRvIGNvcnJlY3RhbWVudGUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkaHR0cC5wdXQoJy9LYXNoLkpTVFNVVC5XZWIvYXBpL0Zvb3MvJyArIHZtLklkLCB7IE5hbWU6IHZtLk5hbWUsIFN0YXR1czogdm0uU3RhdHVzIH0pLnRoZW4oZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICAgICAgdm0uc2hvd01lc3NhZ2UoJ0luZm9ybWFjacOzbiBkZWwgc2lzdGVtYScsICdHdWFyZGFkbyBjb3JyZWN0YW1lbnRlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZtLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkaHR0cC5kZWxldGUoJy9LYXNoLkpTVFNVVC5XZWIvYXBpL0Zvb3MvJyArIHZtLklkLCB7fSkudGhlbihmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgICAgIHZtLnNob3dNZXNzYWdlKCdJbmZvcm1hY2nDs24gZGVsIHNpc3RlbWEnLCAnRWxpbWluYWRvIGNvcnJlY3RhbWVudGUnKTtcclxuICAgICAgICAgICAgdm0ucmV0cmlldmVGb28oJ2ZpcnN0Jyk7XHJcbiAgICAgICAgICAgIHZtLmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZtLnJldHJpZXZlRm9vKCdwcmV2aW91cycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2bS5uZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdm0uSWQgPSAwO1xyXG4gICAgICAgIHZtLk5hbWUgPSAnJztcclxuICAgICAgICB2bS5TdGF0dXMgPSAnJztcclxuXHJcbiAgICAgICAgdm0uaXNOZXcgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB2bS5yZXRyaWV2ZUZvbyA9IGZ1bmN0aW9uIChtb2RlKSB7XHJcbiAgICAgICAgdmFyIHRoZUlkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICRodHRwLmdldCgnL0thc2guSlNUU1VULldlYi9hcGkvRm9vcy8nICsgdm0uSWQgKyAnLycgKyBtb2RlICsgJ0lkJywge30pLnRoZW4oZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICB0aGVJZCA9IHJlcS5kYXRhO1xyXG4gICAgICAgICAgICB2bS5pc05ldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJGh0dHAuZ2V0KCcvS2FzaC5KU1RTVVQuV2ViL2FwaS9Gb29zLycgKyB0aGVJZCwge30pLnRoZW4oZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgICAgICAgICAgdm0uSWQgPSByZXEuZGF0YS5JZDtcclxuICAgICAgICAgICAgICAgIHZtLk5hbWUgPSByZXEuZGF0YS5OYW1lO1xyXG4gICAgICAgICAgICAgICAgdm0uU3RhdHVzID0gcmVxLmRhdGEuU3RhdHVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgdm0uc2hvd01lc3NhZ2UocmVzdWx0LnN0YXR1cywgcmVzdWx0LnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICB2bS5uZXcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pOyIsImZ1bmN0aW9uIG1lc3NhZ2VNb2RhbERpcmVjdGl2ZSgpIHtcclxuICAgIHZhciBkaXJlY3RpdmUgPSB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL3ZpZXdzL21lc3NhZ2VNb2RhbC5odG1sJyxcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VTdGF0dXM6ICc9JyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJz0nXHJcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogbGluayxcclxuICAgICAgICBjb250cm9sbGVyOiBNZXNzYWdlTW9kYWxDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbGluaygkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcclxuICAgICAgICAkZWxlbWVudC5hdHRyKCdpZCcsICRhdHRycy5tb2RhbElkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGlyZWN0aXZlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlTW9kYWxDb250cm9sbGVyKCkge1xyXG59XHJcblxyXG5hbmd1bGFyXHJcbiAgICAubW9kdWxlKCdhcHAnKVxyXG4gICAgLmRpcmVjdGl2ZSgnbWVzc2FnZU1vZGFsJywgbWVzc2FnZU1vZGFsRGlyZWN0aXZlKVxyXG4gICAgLmNvbnRyb2xsZXIoJ01lc3NhZ2VNb2RhbENvbnRyb2xsZXInLCBNZXNzYWdlTW9kYWxDb250cm9sbGVyKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
