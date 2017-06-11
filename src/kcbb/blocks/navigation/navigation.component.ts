import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Links } from './navigation.model';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.html',
    styleUrls: ['./navigation.less']
})

export class NavigationComponent {

    public navigation: any;
    public loading: boolean;
    private PATH: string;

    @Input() width;
    @Input() fixed;

    @Output() navigate = new EventEmitter();

    // TODO: on scroll => close menu

    @HostListener('window:resize', ['$event']) onResize() {
        this.closeMenuOnSmallDevice();
    }

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init(): void {

        this.PATH = 'assets/app/img/';

        this.loading = true;

        this.navigation = {
            'links': [],
            'isVisible': true
        };

        this.get();

    }

    private get(): void {

        const LINK: string = 'navigation.json';
        this.httpService.get(LINK).subscribe(data => {
            this.navigation.links = (new Links(data)).links;
            this.loading = false;
            this.closeMenuOnSmallDevice();
        });

    }

    public navigateTo(link: any): void {

        this.closeMenuOnSmallDevice();
        this.navigate.emit(link);

    }

    public navigateToSelected(link: any): void {

        this.closeMenuOnSmallDevice();
        this.navigate.emit(link.id[link.dropdown.selected]);
        link.dropdown.select(-1);

    }

    public toggleMenu(): void {
        this.navigation.isVisible ? this.hideMenu() : this.showMenu();
    }

    public img(filename: string): string {
        return this.PATH + filename;
    }

    private showMenu(): void {
        this.navigation.isVisible = true;
    }

    private hideMenu(): void {
        this.navigation.isVisible = false;
    }

    public notSmall(): boolean {
        return (this.width > (this.navigation.links.length * 250) + 200);
    }

    private closeMenuOnSmallDevice(): void {
        this.navigation.isVisible = this.notSmall();
    }

    public isDropdown(type: string): boolean {
        return (type === 'dropdown');
    }

    public isLink(type: string): boolean {
        return (type !== 'dropdown');
    }

}
