import { Component, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
    selector: 'slider',
    templateUrl: './slider.html',
    styleUrls: ['./slider.less'],
    animations: [
        trigger('animateSlide', [
            state('down, previous, next, active',
                style({
                    visibility: "visible"
                })
            ),
            state('inactive',
                style({
                    visibility: "hidden"
                })
            ),
            // active -> inactive
            transition('down => inactive', [
                animate(300, keyframes([
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 50
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 50
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 50
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 50
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(0.5, 0.5)',
                        zIndex: 50
                    })
                ]))
            ]),
            transition('previous => inactive', [
                animate(300, keyframes([
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 100
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(-5%, -20%, 0) scale(0.8, 0.8)',
                        zIndex: 100
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(-25%, -50%, 0) scale(0.5, 0.5)',
                        zIndex: 100
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(-45%, -80%, 0) scale(0.2, 0.2)',
                        zIndex: 100
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(-50%, -100%, 0) scale(0, 0)',
                        zIndex: 100
                    })
                ]))
            ]),
            transition('next => inactive', [
                animate(300, keyframes([
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 50
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 50
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 50
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 50
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(0.5, 0.5)',
                        zIndex: 50
                    })
                ]))
            ]),
            // inactive -> active
            transition('inactive => down', [
                animate(300, keyframes([
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, -100%, 0) scale(0, 0)',
                        zIndex: 100
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, -80%, 0) scale(0.2, 0.2)',
                        zIndex: 100
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, -40%, 0) scale(0.5, 0.5)',
                        zIndex: 100
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 100
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 100
                    })
                ]))
            ]),
            transition('inactive => previous', [
                animate(300, keyframes([
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(0.5, 0.5)',
                        zIndex: 50
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 50
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 50
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 50
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 50
                    })
                ]))
            ]),
            transition('inactive => next', [
                animate(300, keyframes([
                    style({
                        visibility: "visible",
                        transform: 'translate3d(-50%, -100%, 0) scale(0, 0)',
                        zIndex: 100
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(-45%, -80%, 0) scale(0.2, 0.2)',
                        zIndex: 100
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(-25%, -50%, 0) scale(0.5, 0.5)',
                        zIndex: 100
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(-5%, -20%, 0) scale(0.8, 0.8)',
                        zIndex: 100
                    }),
                    style({
                        visibility: "visible",
                        transform: 'translate3d(0, 0, 0) scale(1, 1)',
                        zIndex: 100
                    })
                ]))
            ])
        ])
    ]
})

export class SliderComponent {

    @Input() slides: any;

    public slide: any;
    private hack: any;

    constructor() {
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

    // control the animation
    public animationStarted(ev: any): void {
        // console.log(ev.fromState, '->', ev.toState, ev.totalTime + 'ms');

        // active -> 'animation' -> inactive
        if (ev.toState === 'down' || ev.toState === 'previous' || ev.toState === 'next') {
            this.slide.active = this.hack.active;
        }

    }
    public animationDone(ev: any): void {
        // console.log(ev.fromState, '->', ev.toState, ev.totalTime + 'ms');

        // inactive -> 'animation' -> active
        if (ev.fromState === 'inactive') {
            if (ev.toState === 'down' || ev.toState === 'previous' || ev.toState === 'next') {
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
        this.changeSlide('previous', this.slide.active > 0 ? this.slide.active - 1 : this.slides.length - 1);
    }
    public nextSlide(): void {
        this.changeSlide('next', this.slide.active < this.slides.length - 1 ? this.slide.active + 1 : 0);
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
