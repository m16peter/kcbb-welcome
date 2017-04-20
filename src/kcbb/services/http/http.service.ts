import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

    private baseURI: string = '/assets/json'; // [*]: 'http://kcbb.creoweb.sk'

    constructor (private http: Http) {}

    get(url: string) {

        url = this.baseURI + url + '.json';
        // console.log('GET:', url);

        return this.http.get(url).map(res => res.json().data || {} );

    }

}
