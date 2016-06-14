export interface IndexViewModel {
    Name: string;
    Status: string;
}

class IndexController {

    static $inject: string[] = ['$http'];

    public Name: string;
    public Status: string;

    constructor(private $http: ng.IHttpService) { }

    public Save(): void {
        this.$http.post<IndexViewModel>('/url', {}).then((req) => {
            this.Name = req.data.Name;
            this.Status = req.data.Status;
        });
    }

    public FillDataForTests(): void {
        this.Name = "Kash";
        this.Status = "Testing";
    }
}

angular.module('app', []).controller('IndexController', IndexController)