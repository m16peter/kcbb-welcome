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

    @HostListener('window:resize', ['$event']) onResize() {
        this.closeMenuOnSmallDevice();
    }

    constructor(private httpService: HttpService) {
        this.init();
    }

    public navigateTo(type: string, id: string): void {

        this.closeMenuOnSmallDevice();

        this.navigate.emit({
            'type': type,
            'id': id
        });

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

    private init(): void {

        NavigationComponent.PATH = 'assets/app/img/';

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

    private showMenu(): void {
        this.navigation.isVisible = true;
    }

    private hideMenu(): void {
        this.navigation.isVisible = false;
    }

    private closeMenuOnSmallDevice(): void {
        this.navigation.isVisible = (this.width > 1024);
    }

}
