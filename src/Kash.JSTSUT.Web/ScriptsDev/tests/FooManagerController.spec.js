describe("FooManagerController Tests -", function () {

    var $httpBackend, createController;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function ($injector) {
        // Set up the mock http service responses
        $httpMock = $injector.get('$httpBackend');

        // backend definition common for all tests
        //authRequestHandler = $httpBackend.when('GET', '/auth.py')
        //                       .respond({ userId: 'userX' }, { 'A-Token': 'xxx' });

        // Get hold of a scope (i.e. the root scope)
        // $rootScope = $injector.get('$rootScope');

        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');

        createController = function () {
            return $controller('FooManagerController', {  });
        };
    }));


    afterEach(function () {
        //$httpMock.verifyNoOutstandingExpectation();
        //$httpMock.verifyNoOutstandingRequest();
    });

    //var $controller;

    //beforeEach(angular.mock.inject(function (_$controller_) {
    //    $controller = _$controller_;
    //}));

    it("save() Se debería haber creado un nuevo Foo con Id: 123, Name: 'TestName', Status: 'TestStatus'", function () {
        //Arrange
        var controller = createController();
        controller.isNew = true;
        controller.Name = 'TestName';
        controller.Status = 'TestStatus';

        $httpMock
            .expectPOST('/Kash.JSTSUT.Web/api/Foos', { Name: 'TestName', Status: 'TestStatus' })
            .respond(201, { Id: 123, Name: 'TestName', Status: 'TestStatus' });


        //Act
        controller.save();

        //Assert
        expect(controller.Id).toBe(0);
        expect(controller.Name).toBe('');
        expect(controller.Status).toBe('');
    });

    it("Los datos por defecto deberían ser Id: 0, Name: '', Status: ''", function () {
        //Arrange
        var controller = createController();

        //Act
        controller.new();

        //Assert
        expect(controller.Id).toBe(0);
        expect(controller.Name).toBe('');
        expect(controller.Status).toBe('');
    });
});