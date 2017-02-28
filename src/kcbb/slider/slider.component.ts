import { Component, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
    selector: 'slider',
    templateUrl: './slider.html',
    styleUrls: ['./slider.css'],
    animations: [
        trigger('animateSlide', [
            /* STATES */
            state('slide-down, slide-left, slide-right, none', style({zIndex: 50})),
            state('inactive', style({zIndex: 0})),
            /* STYLES */
            transition('* => slide-down', [
                animate(400, keyframes([
                    style({zIndex: 100, transform: 'translateY(-100%)'}),
                    style({zIndex: 100, transform: 'translateY(-20%)'}),
                    style({zIndex: 100, transform: 'translateY(0)'})
                ]))
            ]),
            transition('* => slide-left', [
                animate(400, keyframes([
                    style({zIndex: 100, transform: 'translateX(100%)'}),
                    style({zIndex: 100, transform: 'translateX(20%)'}),
                    style({zIndex: 100, transform: 'translateX(0)'})
                ]))
            ]),
            transition('* => slide-right', [
                animate(400, keyframes([
                    style({zIndex: 100, transform: 'translateX(-100%)'}),
                    style({zIndex: 100, transform: 'translateX(-20%)'}),
                    style({zIndex: 100, transform: 'translateX(0)'})
                ]))
            ]),
            transition('inactive <=> *', [
                style({zIndex: 100}), animate(400)
            ])
        ])
    ]
})

export class SliderComponent {

    @Input() slides: any;

    public slide: any;

    constructor() {
        this.slide = {
            'active': 0,
            'animation': 'none'
        };
    }

    public previousSlide(): void {
        this.slide.animation = 'slide-left';
        this.slide.active = this.slide.active > 0 ? this.slide.active - 1 : this.slides.length - 1;
    }

    public nextSlide(): void {
        this.slide.animation = 'slide-right';
        this.slide.active = this.slide.active < this.slides.length - 1 ? this.slide.active + 1 : 0;
    }

    public selectSlide(index: number): void {
        this.slide.animation = 'slide-down';
        this.slide.active = index;
    }

}
