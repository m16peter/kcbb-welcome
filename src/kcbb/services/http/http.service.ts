import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

    constructor (private http: Http) {}

    /**
     * GET
     * @param url - path to json file
     * @param filename - requested json file
     * @returns - requested data or empty object
     */
    get(url: string, filename: string) {
        const URL: string = url + 'admin/config' + filename + '.json';
        return this.http.get(URL).map(res => res.json().data || {} );
    }

}
