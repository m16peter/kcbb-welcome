import { Component, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Contact } from './footer.model';

@Component({
    selector: 'kcbb-footer',
    templateUrl: './footer.html',
    styleUrls: ['./footer.less']
})

export class FooterComponent {

    public footer: any;

    @Input() page;

    constructor(private httpService: HttpService) {

        this.footer = {
            'loading': true,
            'contact': []
        };

        this.get();

    }

    private get(): void {

        this.httpService.get('contact.json').subscribe(data => {
            this.footer['contact'] = new Contact(data);
            this.footer['loading'] = false;
        });

    }

    public notEmpty(str: string): boolean {
        return (str !== '');
    }

    public isEmpty(str: string): boolean {
        return (str === '');
    }

    public img(filename: string): string {
        return (this.page['path'] + filename);
    }

}
