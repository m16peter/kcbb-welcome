import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

    private static baseURL: string = 'assets/admin/json/';

    constructor (private http: Http) {}

    public get(link: string): any {
        return this.http.get(HttpService.baseURL + link).map(res => res.json().data || {} );
    }

}
