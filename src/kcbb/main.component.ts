import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent implements OnInit {

    public browser: any;
    public popup: any;

    @ViewChild('container') container;

    @HostListener('window:resize', ['$event']) onResize() {
        this.resize();
    }

    constructor(private router: Router) {

        this.browser = {
            'slider-height': 0,
            'width': 0,
            'path': 'kcbb-welcome/assets/',
            'show-menu': true
        };

        this.popup = {
            'active': false
        };

    }

    ngOnInit() {
        this.resize();
    }

    /**
     * Handles resize event
     */
    private resize(): void {

        this.browser['width'] = this.container.nativeElement.offsetParent.offsetWidth;
        this.closeMenuOnSmallDevice();

    }

    /**
     * Navigation
     */

    public navigateMenu(id: string): void {

        this.closeMenuOnSmallDevice();
        this.router.navigate([id]);

    }

    public toggleMenu(): void {
        this.browser['show-menu'] ? this.closeMenu() : this.openMenu();
    }

    private openMenu(): void {
        this.browser['show-menu'] = true;
    }

    private closeMenu(): void {
        this.browser['show-menu'] = false;
    }

    private closeMenuOnSmallDevice(): void {
        this.browser['show-menu'] = (this.browser['width'] > 1024);
    }

}
