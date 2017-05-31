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
    public sitemap: any;
    public loadingContact: boolean;
    public loadingSiteMap: boolean;

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init(): void {

        FooterComponent.PATH = 'assets/app/img/';

        this.loadingContact = true;
        this.loadingSiteMap = true;
        this.contact = [];
        this.sitemap = [];

        this.getContact();
        this.getSiteMap();

    }

    private getContact(): void {

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

            this.loadingContact = false;
        });

    }


    private getSiteMap(): void {

        const LINK: string = 'navigation.json';
        this.httpService.get(LINK).subscribe(data => {

            // TODO: model
            data.forEach((link) => {

                try {
                    this.sitemap.push({
                        'id': link.id,
                        'type': link.type,
                        'title': link.title,
                        'src': link.src
                    });
                } catch (e) {
                    // console.log(e.message);
                }

            });

            this.loadingSiteMap = false;
        });

    }

    public isSet(str: string): boolean {
        return (str !== '');
    }

    public img(filename: string): string {
        return FooterComponent.PATH + filename;
    }

    public navigate(type: string, id: string): void {

        switch (type) {
            case 'dashboard': {
                // this.router.navigate([id]);
                break;
            }
            case 'article': {
                // this.router.navigate([id]);
                break;
            }
            case 'redirect': {
                // new tab
                // window.open(id, '_blank');
                break;
            }
            case 'scroll': {
                // TODO: emit(id)
                // this.scroll.emit();
                break;
            }
            default: break;
        }

    }

    public notEmpty(str: string): boolean {
        return (str !== '');
    }

}
