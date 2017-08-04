import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { sliderAnimations } from './animations';
import { Slider } from './slides.model';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'kcbb-slider',
    templateUrl: './slider.html',
    styleUrls: ['./slider.less'],
    animations: [ sliderAnimations ]
})

export class SliderComponent implements OnInit {

    public slider: any;
    private hack: any;

    @Input() page;

    @ViewChild('wrapper') wrapper;

    constructor(private httpService: HttpService) {

        this.hack = {
            'active': 0,
            'animation': 'active',
            'BTNsEnabled': true,
            'autoslide': {},
            'isAutoSlideOn': false
        };

        this.slider = {
            'active': -1
        };

    }

    ngOnInit() {
        if (this.page['browser-width'] >= 600) {
            this.get();
        }
    }

    private get(): void {

        const LINK: string = 'slider.json';

        this.httpService.get(LINK).subscribe(data => {
            this.slider = new Slider(data);
            this.setAutoSlideOn();
        });

    }

    private setAutoSlideOn(): void {

        const DISABLE_AUTOSLIDE: boolean = false;
        this.hack.isAutoSlideOn = true;
        this.randomSlide();

        this.hack['autoslide'] = setInterval(() => {
            this.nextSlide(DISABLE_AUTOSLIDE);
        }, 6000);

    }

    private setAutoSlideOff(): void {
        this.hack.isAutoSlideOn = false;
        clearInterval(this.hack['autoslide']);
    }

    private randomSlide(): void {

        let random = Math.floor((Math.random() * (this.slider.slides.length)));

        if (this.slider.active !== random) {
            this.selectSlide(random);
        }

    }

    public animationStarted(ev: any): void {
        // console.log(ev.fromState, '->', ev.toState, ev.totalTime + 'ms');

        // active -> 'animation' -> inactive
        if (ev.toState === 'down' || ev.toState === 'previous' || ev.toState === 'next') {
            this.slider.active = this.hack.active;
        }

    }

    public animationDone(ev: any): void {
        // console.log(ev.fromState, '->', ev.toState, ev.totalTime + 'ms');

        // inactive -> 'animation' -> active
        if (ev.fromState === 'inactive') {
            if (ev.toState === 'down' || ev.toState === 'previous' || ev.toState === 'next') {
                this.slider.animation = 'active';
            }
        }

        // enable slider buttons
        if (ev.toState === 'active') {
            // console.log('slider BTNs -> enabled');
            this.hack.BTNsEnabled = true;
        }

    }

    public previousSlide(): void {
        if (this.hack.isAutoSlideOn) {
            this.setAutoSlideOff();
        }
        this.changeSlide('previous', this.slider.active > 0 ? this.slider.active - 1 : this.slider.slides.length - 1);
    }

    public nextSlide(disable_autoslide: boolean = true): void {
        if (this.hack.isAutoSlideOn && disable_autoslide) {
            this.setAutoSlideOff();
        }
        this.changeSlide('next', this.slider.active < this.slider.slides.length - 1 ? this.slider.active + 1 : 0);
    }

    public selectSlide(index: number): void {
        if (this.hack.isAutoSlideOn) {
            this.setAutoSlideOff();
        }
        if (this.slider.active !== index) {
            this.changeSlide('down', index);
        }
    }

    private changeSlide(animation: string, activeIndex: number): void {
        if (this.hack.BTNsEnabled) {

            // disable button
            this.hack.BTNsEnabled = false;

            // change active slide
            this.hack.active = activeIndex;

            // animate
            this.slider.animation = animation;
            this.hack.animation = animation;
        }
    }

    public h(sizeX: number, sizeY: number, activeSlide: boolean): number {

        // Example:
        // img size: 1920x500
        // browser width: 1366

        // 1920px ... ... ... 100%
        // 500px  ... ... ... X %
        // => X = (500 * 100) / 1920 =~ 26%
        const percentage = Math.floor((sizeY * 100) / sizeX);

        // 1366px ... ... ... 100%
        // Y px   ... ... ... 26%
        // => Y = (1366 * 26) / 100 =~ 355px
        const size = Math.floor(((this.page['browser-width'] - 60) * percentage) / 100);

        if (activeSlide) {
            // console.log( size );
            this.wrapper.nativeElement.children[0].style.height = size + 'px';
            this.page['slider-height'] = size;
        }

        return size;
    }

    public img(filename: string): string {
        return this.page['path'] + filename;
    }

}
