import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.html',
    styleUrls: ['./navigation.less']
})

/**
 * Page Navigation
 * in: 'width' - get browser width (changing on resize)
 * out: 'scroll' - enable scroll functionality
 */
export class NavigationComponent {

    public navigation: any;
    public loading: boolean;
    private static PATH: string;

    @Input() width;
    @Output() scroll = new EventEmitter();

    constructor(private httpService: HttpService, private router: Router) {
        this.init();
    }

    private init(): void {

        NavigationComponent.PATH = 'assets/app/img/';

        this.loading = true;

        this.navigation = {
            'links': [],
            'menu': {
                'isVisible': false
            }
        };

        this.get();

    }

    private get(): void {

        const LINK: string = 'navigation.json';
        this.httpService.get(LINK).subscribe(data => {

            data.forEach((link) => {

                try {
                    if (link.show) {

                        this.navigation.links.push({
                            'id': link.id,
                            'type': link.type,
                            'title': link.title,
                            'src': link.src
                        });

                    }
                } catch (e) {
                    console.log(e.message);
                }

            });

            this.loading = false;
            this.closeMenuOnSmallDevice();

        });

    }

    public navigate(type: string, id: string): void {

        switch (type) {
            case 'dashboard': {
                this.navigateTo(id);
                break;
            }
            case 'article': {
                this.navigateTo(id);
                break;
            }
            case 'redirect': {
                window.open(id, '_blank');
                break;
            }
            case 'scroll': {
                this.scroll.emit();
                break;
            }
            default: break;
        }

    }

    public navigateTo(id: string): void {

        this.closeMenuOnSmallDevice();
        this.router.navigate([id]);

    }

    public toggleMenu(): void {
        this.navigation['menu'].isVisible ? this.hideMenu() : this.showMenu();
    }

    private showMenu(): void {
        this.navigation['menu'].isVisible = true;
    }

    private hideMenu(): void {
        this.navigation['menu'].isVisible = false;
    }

    private closeMenuOnSmallDevice(): void {
        this.navigation['menu'].isVisible = (this.width > 768);
    }

    public w(): number {
        this.closeMenuOnSmallDevice();
        return this.width;
    }

    public img(filename: string): string {
        return NavigationComponent.PATH + filename;
    }

    public notEmpty(str: string): boolean {
        return (str !== '');
    }

}
