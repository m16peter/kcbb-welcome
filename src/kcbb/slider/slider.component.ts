import { Component, Input, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { sliderAnimations } from './animations';

@Component({
    selector: 'slider',
    templateUrl: './slider.html',
    styleUrls: ['./slider.less'],
    animations: [ sliderAnimations ]
})

export class SliderComponent {

    @Input() slider: any;

    // @HostBinding('style.display')   display = 'block';
    // @HostBinding('style.position')  position = 'absolute';

    @ViewChild('wrapper') wrapper;
    @ViewChildren('image') images;

    public hack: any;

    constructor() {
        this.hack = {
            'active': 0,
            'animation': 'active',
            'BTNsEnabled': true
        };
    }

    ngAfterViewInit() {
        // TODO: need a fix...
        this.updateHeight();
    }

    // control the animation
    public animationStarted(ev: any): void {
        // console.log(ev.fromState, '->', ev.toState, ev.totalTime + 'ms');

        // active -> 'animation' -> inactive
        if (ev.toState === 'down' || ev.toState === 'previous' || ev.toState === 'next') {
            this.slider.active = this.hack.active;
        }

    }
    public animationDone(ev: any, el: ElementRef): void {
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
            this.updateHeight();
        }

    }

    // user selecting a slide
    public previousSlide(): void {
        this.changeSlide('previous', this.slider.active > 0 ? this.slider.active - 1 : this.slider.slides.length - 1);
    }
    public nextSlide(): void {
        this.changeSlide('next', this.slider.active < this.slider.slides.length - 1 ? this.slider.active + 1 : 0);
    }
    public selectSlide(index: number): void {
        if (this.slider.active !== index) {
            this.changeSlide('down', index);
        }
    }

    // manage user's select
    private changeSlide(animation: string, activeIndex: number): void {
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

    // auto-resize slider
    private updateHeight(): void {
        let i = this.slider.active;
        let h = this.images._results[i].nativeElement.offsetHeight;
        this.wrapper.nativeElement.style.height = h + "px";
        // console.log('height-update:', h, this.images._results);
    }

}
