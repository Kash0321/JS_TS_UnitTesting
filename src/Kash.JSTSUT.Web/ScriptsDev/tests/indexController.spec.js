describe("indexController Tests", function () {

    var httpService;
    var promise;

    beforeEach(angular.mock.module('app'));

    var $controller;

    beforeEach(angular.mock.inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('new', function () {
        it("Los datos por defecto deberían ser Name: Kash, Status: Testing", function () {
            var controller = $controller('indexController', {});
            controller.new();
            expect(controller.Id).toBe(0);
            expect(controller.Name).toBe('');
            expect(controller.Status).toBe('');
        });
    });

    describe('Save', function () {
        it("Los datos por defecto deberían ser Name: Kash, Status: Testing", function () {
            var controller = $controller('indexController', {});
            controller.FillDataForTests();
            expect(controller.Name).toBe("Kash");
            expect(controller.Status).toBe("Testing");
        });
    });
});