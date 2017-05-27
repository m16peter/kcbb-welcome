import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent implements OnInit {

    public browser: any;
    public popup: any;

    @ViewChild('main') main;

    @HostListener('window:resize', ['$event']) onResize() {
        this.resize();
    }

    constructor() {

        this.browser = {
            'width': 0
        };

        this.popup = {
            'active': false
        };

    }

    ngOnInit() {
        this.resize();
    }

    private resize(): void {
        this.browser['width'] = this.main.nativeElement.clientWidth;
    }

    /**
     * TODO: Scroll To
     * (for now it scrolls to bottom of the page)
     */
    public scrollTo() {

        let start = this.main.nativeElement.scrollTop + 1;
        let end = this.main.nativeElement.scrollHeight - this.main.nativeElement.offsetHeight;
        let step = end;

        const interval = setInterval(() => {

            step = Math.floor(step / 1.001);
            start += (end - step);

            if (start < end) {
                this.main.nativeElement.scrollTop = start;
            } else {
                this.main.nativeElement.scrollTop = end;
                clearInterval(interval);
            }

        }, 10);

    }

}
