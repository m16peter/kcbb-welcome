import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent implements OnInit {

    public page: any;
    public scrollSections: any;

    @ViewChild('main') main;

    @HostListener('window:keydown', ['$event']) hotkeys($event) {

        // console.log($event.keyCode);

        // don't listen for key events if scrolling
        if (!this.page['scrolling']) {

            switch ($event.keyCode) {
                // page-up
                case 33: {
                    if (this.page['active-section'] > 0) {
                        this.page['active-section'] = 0;
                        this.scrollTo(this.scrollSections[0]);
                    }
                    break;
                }
                // page-down
                case 34: {
                    if (this.page['active-section'] < 2) {
                        this.scrollTo(this.scrollSections[this.page['active-section'] + 1]);
                    }
                    break;
                }
                // up
                case 38: {
                    if (this.page['active-section'] > 0) {
                        this.page['active-section'] = 0;
                        this.scrollTo(this.scrollSections[0]);
                    }
                    break;
                }
                // down
                case 40: {
                    if (this.page['active-section'] < 2) {
                        this.scrollTo(this.scrollSections[this.page['active-section'] + 1]);
                    }
                    break;
                }
                default: break;
            }
        }

    }

    @HostListener('window:resize', ['$event']) onResize() {
        this.resize();
    }

    constructor(private router: Router) {

        this.page = {
            'browser-height': 0,
            'browser-width': 0,
            'slider-height': 0,
            'total-height': 0,
            'navigationFixed': false,
            'active-section': 0,
            'scrolling': false
        };

        this.scrollSections = ['top', 'navigation', 'footer'];

    }

    ngOnInit() {
        this.resize();
    }

    private resize(): void {
        this.page['browser-width'] = this.main.nativeElement.clientWidth;
    }

    public navigateTo(navigation: any): void {

        switch (navigation.type) {
            case 'dashboard': {
                this.scrollTo('navigation');
                this.router.navigate([navigation.id]);
                return;
            }
            case 'article': {
                this.scrollTo('navigation');
                this.router.navigate([navigation.id]);
                return;
            }
            case 'nested-article': {
                this.scrollTo('navigation');
                this.router.navigate([navigation.id]);
                return;
            }
            case 'redirect': {
                this.scrollTo('navigation');
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
            let end = 0;

            switch (section) {
                case this.scrollSections[0]:
                    this.page['active-section'] = 0;
                    end = 0;
                    break;
                case this.scrollSections[1]:
                    this.page['active-section'] = 1;
                    end = this.page['slider-height'] + 1;
                    break;
                case this.scrollSections[2]:
                    this.page['active-section'] = 2;
                    end = this.getScrollHeight() - this.getOffsetHeight();
                    break;
                default:
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

    public onScroll(): void {
        this.page['navigationFixed'] = (this.getScrollTop() >= this.page['slider-height']);

        if (this.getScrollTop() < this.page['slider-height']) {
            this.page['active-section'] = 0;
        } else if ((this.getScrollHeight() - this.getOffsetHeight()) >= this.getScrollTop()) {
            this.page['active-section'] = 1;
        } else {
            this.page['active-section'] = 2;
        }

    }

    public notSmall(): boolean {

        if (this.page['browser-width'] <= 500) {

            this.page['slider-height'] = 0;
            return false;

        }
        return true;

    }

}
