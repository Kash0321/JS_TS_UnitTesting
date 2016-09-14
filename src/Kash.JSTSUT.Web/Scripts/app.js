angular.module('app', []);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImluZGV4Q29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignaW5kZXhDb250cm9sbGVyJywgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG5cclxuICAgIHZtLlNhdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRodHRwLnBvc3QoJy91cmwnLCB7fSkudGhlbihmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgICAgICAgICB2bS5OYW1lID0gcmVxLmRhdGEuTmFtZTtcclxuICAgICAgICAgICAgICAgIHZtLlN0YXR1cyA9IHJlcS5kYXRhLlN0YXR1cztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIHZtLkZpbGxEYXRhRm9yVGVzdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdm0uTmFtZSA9IFwiS2FzaFwiO1xyXG4gICAgICAgIHZtLlN0YXR1cyA9IFwiVGVzdGluZ1wiO1xyXG4gICAgfTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
