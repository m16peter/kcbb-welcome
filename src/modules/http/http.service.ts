import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

    private baseUrl: string = 'http://localhost:8000';
    private callback = '?callback=JSONP_CALLBACK';

    constructor (private jsonp: Jsonp) {}

    // GET
    get(url: string) {

        url = this.baseUrl + url + this.callback;
        console.log('GET:', url);

        return this.jsonp.get(url).map(res => res.json());

    }

}
