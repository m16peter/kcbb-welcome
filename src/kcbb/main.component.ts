import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent implements OnInit {

    public page: any;
    public popup: any;

    @ViewChild('main') main;

    @HostListener('window:resize', ['$event']) onResize() {
        this.resize();
    }

    constructor(private router: Router) {

        this.page = {
            'browser-height': 0,
            'browser-width': 0,
            'slider-height': 0,
            'total-height': 0
        };

        this.popup = {
            'isVisible': false,
            'data': {}
        };

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

        let start = this.getScrollTop() + 1;
        let end = 0;

        switch (section) {
            case 'navigation':
                end = this.page['slider-height'];
                break;
            case 'footer':
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
                }

            }, 10);

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

}
