import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Links } from './header.model';

@Component({
    selector: 'kcbb-header',
    templateUrl: './header.html',
    styleUrls: ['./header.less']
})

// todo: close on scroll
export class HeaderComponent {

    public navigation: any;

    @Input() page;
    @Output() navigate = new EventEmitter();

    @HostListener('window:resize', ['$event']) onResize() {
        this.closeMenuOnSmall();
    }

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init(): void {

        this.navigation = {
            'links': [],
            'isVisible': true,
            'loading': true
        };

        this.get();

    }

    private get(): void {

        const LINK: string = 'navigation.json';
        this.httpService.get(LINK).subscribe(data => {
            this.navigation.links = (new Links(data)).links;
            this.navigation.loading = false;
            this.closeMenuOnSmall();
        });

    }

    public navigateTo(link: any, index: number): void {
        this.closeMenuOnSmall();
        this.navigate.emit(link);
        this.page['active-index'] = index;
    }

    public navigateToSelected(link: any, index: number): void {
        this.navigateTo(link.id[link.dropdown.selected], index);
        link.dropdown.select(-1);
    }

    public toggleMenu(): void {
        this.navigation.isVisible ? this.hideMenu() : this.showMenu();
    }

    public closeMenu(): void {
        this.hideMenu();
    }

    public img(filename: string): string {
        return this.page['path'] + filename;
    }

    private showMenu(): void {
        this.scrollToNavigation();
        this.navigation.isVisible = true;
    }

    private hideMenu(): void {
        this.navigation.isVisible = false;
    }

    private closeMenuOnSmall(): void {
        this.navigation.isVisible = !this.isSmall();
    }

    public isSmall(): boolean {
        return (this.page['browser-width'] <= (this.navigation.links.length * 250) + 200);
    }

    public menuIsActive(): boolean {
        return (this.navigation.isVisible && this.isSmall());
    }

    public scrollToNavigation(index: number = -1): void {

        this.navigate.emit({
            'type': 'scroll',
            'id': 'content'
        });

        if (index !== -1) {
            this.page['active-index'] = index;
        }

    }

}
