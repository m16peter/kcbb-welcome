import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'kcbb-main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent implements OnInit {

    public page: any; // holding all the good stuff (check the constructor) :)

    @ViewChild('main') main; // scroll listener

    @HostListener('window:keydown', ['$event']) hotkeys($event) { // key listener
        this.keydown($event.keyCode);
    }

    @HostListener('window:resize', ['$event']) onResize() { // resize listener
        this.resize();
    }

    constructor(private router: Router) {

        this.page = {
            'browser-height': 0,
            'browser-width': 0,
            'slider-height': 0, // active slide height
            'fixed-header': false, // header component
            'scroll-sections': ['header', 'content', 'footer'],
            'active-section': 0, // actual scrolling section of browser
            'scrolling': false, // track scrolling
            'active-index': 0, // header index of active content
            'path': 'assets/app/img/' // path to stored images
        };

    }

    ngOnInit() {
        this.resize();
    }

    private resize(): void {
        this.page['browser-width'] = this.main.nativeElement.clientWidth;
    }

    private keydown(keyCode: number): void {

        if (!this.page['scrolling']) {

            switch (keyCode) {
                case 33: { // page-up
                    this.previousSection();
                    break;
                }
                case 34: { // page-down
                    this.nextSection();
                    break;
                }
                case 38: { // up
                    this.previousSection();
                    break;
                }
                case 40: { // down
                    this.nextSection();

                    break;
                }
                default: break;
            }

        }

    }

    public navigateTo(navigation: any): void {
        // change the content &| scroll

        switch (navigation.type) {
            case 'dashboard': {
                this.scrollTo('content');
                this.router.navigate([navigation.id]);
                return;
            }
            case 'article': {
                this.scrollTo('content');
                this.router.navigate([navigation.id]);
                return;
            }
            case 'redirect': {
                this.scrollTo('content');
                window.open(navigation.id, '_blank');
                return;
            }
            case 'scroll': {
                this.scrollTo(navigation.id);
                return;
            }
            default: return;
        }

    }

    private scrollTo(section: string): void {

        if (!this.page['scrolling']) {

            this.page['scrolling'] = true;

            let start = this.getScrollTop() + 1;
            let end: number;

            switch (section) {
                case this.page['scroll-sections'][0]:
                    this.page['active-section'] = 0;
                    end = 0;
                    break;
                case this.page['scroll-sections'][1]:
                    this.page['active-section'] = 1;
                    end = this.page['slider-height'] + 1;
                    break;
                case this.page['scroll-sections'][2]:
                    this.page['active-section'] = 2;
                    end = this.getScrollHeight() - this.getOffsetHeight();
                    break;
                default:
                    end = 0;
                    break;
            }

            if (start > end) {

                const interval = setInterval(() => {

                    start = Math.floor(start / 1.1);

                    if (start > end) {
                        this.setScrollTop(start);
                    } else {
                        this.setScrollTop(end);
                        clearInterval(interval);
                        this.page['scrolling'] = false;
                    }

                }, 10);

            } else {

                let step = end;

                const interval = setInterval(() => {

                    step = Math.floor(step / 1.001);
                    start += (end - step);

                    if (start < end) {
                        this.setScrollTop(start);
                    } else {
                        this.setScrollTop(end);
                        clearInterval(interval);
                        this.page['scrolling'] = false;
                    }

                }, 10);

            }

        }

    }

    public onScroll(): void {

        let scrolledPx = this.getScrollTop();
        let pagePx = this.getScrollHeight() - this.getOffsetHeight();
        let sliderPx = this.page['slider-height'];

        this.page['fixed-header'] = (scrolledPx >= sliderPx);

        if (scrolledPx <= sliderPx) {
            this.page['active-section'] = 0;
        } else if (scrolledPx > sliderPx && scrolledPx < pagePx) {
            this.page['active-section'] = 1;
        } else {
            this.page['active-section'] = 2;
        }

    }

    private getScrollTop(): number {
        return this.main.nativeElement.scrollTop;
    }

    private setScrollTop(size: number): void {
        this.main.nativeElement.scrollTop = size;
    }

    private getOffsetHeight(): number {
        return this.main.nativeElement.offsetHeight;
    }

    private getScrollHeight(): number {
        return this.main.nativeElement.scrollHeight;
    }

    public isSmall(): boolean {
        return (this.page['browser-width'] < 600);
    }

    private nextSection(): void {
        if (this.page['active-section'] < 2) {
            this.scrollTo(this.page['scroll-sections'][++this.page['active-section']]);
        }
    }

    private previousSection(): void {
        if (this.page['active-section'] > 0) {
            this.scrollTo(this.page['scroll-sections'][--this.page['active-section']]);
        }
    }

}
