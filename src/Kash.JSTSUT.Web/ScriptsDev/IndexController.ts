import {IIndexViewModel} from './IIndexViewModel'

export class IndexController {

    static $inject: string[] = ['$http'];

    public Name: string;
    public Status: string;

    constructor(private $http: ng.IHttpService) { }

    public Save(): void {
        this.$http.post<IIndexViewModel>('/url', {}).then((req) => {
            this.Name = req.data.Name;
            this.Status = req.data.Status;
        });
    }

    public FillDataForTests(): void {
        this.Name = "Kash";
        this.Status = "Testing";
    }
}