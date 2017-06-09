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

    private static PATH: string;

    @Input() width;

    @Output() navigate = new EventEmitter();

    @HostListener('window:scroll', ['$event']) onScroll() {
        // TODO: hide menu & close dropdown
    }

    @HostListener('window:resize', ['$event']) onResize() {
        this.closeMenuOnSmallDevice();
    }

    constructor(private httpService: HttpService) {
        this.init();
    }

    public navigateTo(link: any, index: number): void {

        this.closeMenuOnSmallDevice();
        this.activateLink(index);

        if (link.type !== 'menu') {

            this.navigate.emit({
                'type': link.type,
                'id': link.id
            });

        } else {

            this.navigate.emit({
                'type': 'scroll',
                'id': 'navigation'
            });

        }

    }

    public toggleMenu(): void {
        this.navigation.isVisible ? this.hideMenu() : this.showMenu();
    }

    public img(filename: string): string {
        return NavigationComponent.PATH + filename;
    }

    public notEmpty(str: string): boolean {
        return (str !== '');
    }

    public isDropdownVisible(type: string, index: number): boolean {
        return (this.isDropdown(type) && this.isDropdownActive(index));
    }

    public isLinkActive(index: number): boolean {
        return (this.navigation.active === index);
    }

    public navigateAndClose(link: any, index: number): void {

        // TODO: close drop-down
        this.navigateTo(link, index);

    }

    private init(): void {

        NavigationComponent.PATH = 'assets/app/img/';

        this.loading = true;

        this.navigation = {
            'links': [],
            'isVisible': true,
            'active': 0
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

    private showMenu(): void {
        this.navigation.isVisible = true;
    }

    private hideMenu(): void {
        this.navigation.isVisible = false;
    }

    private closeMenuOnSmallDevice(): void {
        this.navigation.isVisible = this.width > (this.navigation.links.length * 200);
    }

    private activateLink(index: number): void {
        this.navigation.active = index;
    }

    private isDropdown(type: string): boolean {
        return (type === 'menu');
    }

    private isDropdownActive(index: number): boolean {
        return (this.navigation.active === index);
    }

}
