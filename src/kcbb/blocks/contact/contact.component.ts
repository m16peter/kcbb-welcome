import { Component } from '@angular/core';
import { HttpService } from '../../services/http/http.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.less']
})

export class ContactComponent {

    public list: any;
    public loading: boolean = true;

    constructor(private httpService: HttpService) {

        this.list = [];

        this.httpService
            .get('/contact')
            .subscribe(data => {

                this.list = data;
                this.loading = false;

            });

    }

}
