import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

    private baseURI: string = 'kcbb-welcome/assets/json'; // 'kcbb-welcome/'

    constructor (private http: Http) {}

    get(url: string) {

        url = this.baseURI + url + '.json';
        return this.http.get(url).map(res => res.json().data || {} );

    }

}
