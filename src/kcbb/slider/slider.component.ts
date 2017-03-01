import { Component, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Directive, ElementRef, HostBinding, Renderer } from '@angular/core';

@Directive({
    selector: '[workItemResize]'
})

@Component({
    selector: 'slider',
    templateUrl: './slider.html',
    styleUrls: ['./slider.css'],
    animations: [
        trigger('animateSlide', [
            state('down, left, right, active',
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0)',
                    webkitTransform: 'translate3d(0, 0, 0)'
                })
            ),
            state('inactive',
                style({
                    visibility: "hidden",
                    transform: 'translate3d(0, 0, 0)',
                    webkitTransform: 'translate3d(0, 0, 0)'
                })
            ),
            // active -> inactive
            transition('down => inactive', [
                animate(300, keyframes([
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0)',
                        webkitTransform: 'translate3d(0, 0, 0)'
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0)',
                        webkitTransform: 'translate3d(0, 0, 0)'
                    })
                ]))
            ]),
            transition('left => inactive', [
                animate(300, keyframes([
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0)',
                        webkitTransform: 'translate3d(0, 0, 0)',
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(-100%, 0, 0)',
                        webkitTransform: 'translate3d(-100%, 0, 0)'
                    })
                ]))
            ]),
            transition('right => inactive', [
                animate(300, keyframes([
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0)',
                        webkitTransform: 'translate3d(0, 0, 0)',
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(100%, 0, 0)',
                        webkitTransform: 'translate3d(100%, 0, 0)'
                    })
                ]))
            ]),
            // inactive -> active
            transition('inactive => down', [
                animate(300, keyframes([
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, -100%, 0)',
                        webkitTransform: 'translate3d(0, -100%, 0)',
                        zIndex: 100
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0)',
                        webkitTransform: 'translate3d(0, 0, 0)',
                        zIndex: 100
                    })
                ]))
            ]),
            transition('inactive => left', [
                animate(300, keyframes([
                    style({
                        visibility: "visible",
                        transform: 'translate3d(100%, 0, 0)',
                        webkitTransform: 'translate3d(100%, 0, 0)',
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0)',
                        webkitTransform: 'translate3d(0, 0, 0)'
                    })
                ]))
            ]),
            transition('inactive => right', [
                animate(300, keyframes([
                    style({
                        visibility: "visible",
                        transform: 'translate3d(-100%, 0, 0)',
                        webkitTransform: 'translate3d(-100%, 0, 0)',
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0)',
                        webkitTransform: 'translate3d(0, 0, 0)'
                    })
                ]))
            ])
        ])
    ]
})

export class SliderComponent implements ngAfterViewInit {


    private el: HTMLElement;
    private renderer: Renderer;

    @Input() slides: any;

    public slide: any;
    private hack: any;

    constructor(el: ElementRef, renderer: Renderer) {

        this.el = el.nativeElement;
        this.renderer = renderer;

        this.slide = {
            'active': 0,
            'animation': 'active'
        };
        this.hack = {
            'active': 0,
            'animation': 'active',
            'BTNsEnabled': true
        };
    }

    onResize() {
        this.resizeWorks();
    }

    @HostBinding('style.height.px') elHeight:number;

    private resizeWorks(): void {
        this.elHeight = this.el.nativeElement.width;
    }

    // control the animation
    public animationStarted(ev: any): void {
        // console.log(ev.fromState, '->', ev.toState, ev.totalTime + 'ms');

        // active -> 'animation' -> inactive
        if (ev.toState === 'down' || ev.toState === 'left' || ev.toState === 'right') {
            this.slide.active = this.hack.active;
        }

    }
    public animationDone(ev: any): void {
        // console.log(ev.fromState, '->', ev.toState, ev.totalTime + 'ms');

        // inactive -> 'animation' -> active
        if (ev.fromState === 'inactive') {
            if (ev.toState === 'down' || ev.toState === 'left' || ev.toState === 'right') {
                this.slide.animation = 'active';
            }
        }

        // enable slider buttons
        if (ev.toState === 'active') {
            // console.log('slider BTNs -> enabled');
            this.hack.BTNsEnabled = true;
        }

    }

    // user selecting a slide
    public previousSlide(): void {
        this.changeSlide('left', this.slide.active > 0 ? this.slide.active - 1 : this.slides.length - 1);
    }
    public nextSlide(): void {
        this.changeSlide('right', this.slide.active < this.slides.length - 1 ? this.slide.active + 1 : 0);
    }
    public selectSlide(index: number): void {
        if (this.slide.active !== index) {
            this.changeSlide('down', index);
        }
    }

    // manage user's select
    private changeSlide(animation: string, activeIndex: number): void {
        if (this.hack.BTNsEnabled && this.slides.length > 1) {

            // disable button
            // console.log('slider BTNs -> disabled');
            this.hack.BTNsEnabled = false;

            // change active slide
            // console.log('active ->', activeIndex);
            this.hack.active = activeIndex;

            // animate
            // console.log('animation ->', animation, ' -> active');
            this.slide.animation = animation;
            this.hack.animation = animation;
        }
    }

}
