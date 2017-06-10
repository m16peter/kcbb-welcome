import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Contact } from './contact.model';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.html',
    styleUrls: ['./footer.less']
})

export class FooterComponent {

    public static PATH: string;
    public contact: any;
    public image: string;
    public loading: boolean;

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init(): void {

        FooterComponent.PATH = 'assets/app/img/';

        this.loading = true;
        this.contact = [];

        this.get();
    }

    private get(): void {

        const LINK: string = 'contact.json';
        this.httpService.get(LINK).subscribe(data => {
            const CONTACT = new Contact(data);
            this.contact = CONTACT.items;
            this.image = CONTACT.img;
            this.loading = false;
        });

    }

    public isSet(str: string): boolean {
        return (str !== '');
    }

    public img(filename: string): string {
        return FooterComponent.PATH + filename;
    }

    public notEmpty(str: string): boolean {
        return (str !== '');
    }

}
