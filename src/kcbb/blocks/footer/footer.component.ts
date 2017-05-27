import { Component } from '@angular/core';
import { HttpService } from '../../services/http/http.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.html',
    styleUrls: ['./footer.less']
})

/**
 * desc: TODO
 */
export class FooterComponent {

    public static PATH: string;
    public contact: any;
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

            // TODO: model
            data.forEach((item) => {

                try {
                    this.contact.push({
                        'title': item['title'],
                        'info': {
                            'name': item['info'].name,
                            'mail': item['info'].mail,
                            'phone': item['info'].phone,
                            'location': item['info'].location
                        }
                    });
                } catch (e) {
                    this.contact = [];
                }

            });

            this.loading = false;
        });

    }

    public isSet(str: string): boolean {
        return (str !== '');
    }

    public img(filename: string): string {
        return FooterComponent.PATH + filename;
    }

}
