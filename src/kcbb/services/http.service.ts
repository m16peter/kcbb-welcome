import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

    private static baseURL: string = 'assets/admin/json/';

    constructor (private http: Http) {}

    /**
     * desc: HTTP-GET - '<path>.json' file and return it's data
     * in: 'link' - relative path to file
     * out: - json content
     */
    public get(link: string): any {
        const URL: string = HttpService.baseURL + link;
        return this.http.get(URL).map(res => res.json().data || {} );
    }

}
