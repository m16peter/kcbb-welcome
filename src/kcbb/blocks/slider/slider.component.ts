import { Component, ViewChild, Input } from '@angular/core';

import { sliderAnimations } from './animations';
import { Slider } from './slides.model';
import { HttpService } from '../../services/http/http.service';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.html',
    styleUrls: ['./slider.less'],
    animations: [ sliderAnimations ]
})

export class SliderComponent {

    @Input() path;
    @Input() width;
    @Input() height;

    @ViewChild('wrapper') wrapper;

    public slider: any;
    public hack: any;

    private isSetInterval: boolean = true;

    constructor(private httpService: HttpService) {

        this.hack = {
            'active': 0,
            'animation': 'active',
            'BTNsEnabled': true,
        };

        this.slider = {
            'active': -1
        };

        this.httpService
            .get('/slides')
            .subscribe(data => {
                this.slider = new Slider(data)
            });

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

        this.isSetInterval = false;
        this.changeSlide('previous', this.slider.active > 0 ? this.slider.active - 1 : this.slider.slides.length - 1);

    }
    public nextSlide(): void {

        this.isSetInterval = false;
        this.changeSlide('next', this.slider.active < this.slider.slides.length - 1 ? this.slider.active + 1 : 0);

    }
    public selectSlide(index: number): void {

        this.isSetInterval = false;

        if (this.slider.active !== index) {
            this.changeSlide('down', index);
        }

    }

    private changeSlide(animation: string, activeIndex: number): void {

        if (!this.isSetInterval) {
            clearInterval(this.hack.interval);
        }

        if (this.hack.BTNsEnabled) {

            // disable button
            // console.log('slider BTNs -> disabled');
            this.hack.BTNsEnabled = false;

            // change active slide
            // console.log('active ->', activeIndex);
            this.hack.active = activeIndex;

            // animate
            // console.log('animation ->', animation, ' -> active');
            this.slider.animation = animation;
            this.hack.animation = animation;
        }

    }

    public h(sizeX: number, sizeY: number, active: boolean): number {

        // Example:
        // img: 1920x500
        // browser w: 1366

        // 1920px ... ... ... 100%
        // 500px  ... ... ... X %
        // => X = (500 * 100) / 1920 =~ 26
        const percentage = Math.floor((sizeY * 100) / sizeX);

        // 1366px ... ... ... 100%
        // Y px   ... ... ... 26%
        // => Y = (1366 * 26) / 100 =~ 355
        const size = Math.floor(((this.width - 60) * percentage) / 100);

        if (active) {
            // console.log( size );
            this.height = size;
            this.wrapper.nativeElement.children[0].style.height = size + "px";
        }

        return size;
    }

}
