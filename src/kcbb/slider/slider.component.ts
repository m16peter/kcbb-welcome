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
                    style({zIndex: 100, opacity: 0.5, transform: 'translateY(-100%)'}),
                    style({zIndex: 100, opacity: 0.7, transform: 'translateY(-20%)'}),
                    style({zIndex: 100, opacity: 1, transform: 'translateY(0)'})
                ]))
            ]),
            transition('* => slide-left', [
                animate(400, keyframes([
                    style({zIndex: 100, opacity: 0.5, transform: 'translateX(100%)'}),
                    style({zIndex: 100, opacity: 0.7, transform: 'translateX(20%)'}),
                    style({zIndex: 100, opacity: 1, transform: 'translateX(0)'})
                ]))
            ]),
            transition('* => slide-right', [
                animate(400, keyframes([
                    style({zIndex: 100, opacity: 0.5, transform: 'translateX(-100%)'}),
                    style({zIndex: 100, opacity: 0.7, transform: 'translateX(-20%)'}),
                    style({zIndex: 100, opacity: 1, transform: 'translateX(0)'})
                ]))
            ]),
            transition('inactive <=> *', [
                style({zIndex: 100}), animate(400)
            ])
        ])
    ]
})

export class SliderComponent {

    @Input() slider: any;

    public slides: any;
    public active: number;
    public animation: any;

    constructor() {
        this.slides = [];
        this.active = 0;
        this.animation = 'none';
    }

    ngOnInit() {
        this.slider['slides'].forEach(url => {
            this.slides.push(url);
        });
    }

    public previousSlide(): void {
        this.animation = 'slide-left';
        this.active = this.active > 0 ? this.active - 1 : this.slides.length - 1;
    }

    public nextSlide(): void {
        this.animation = 'slide-right';
        this.active = this.active < this.slides.length - 1 ? this.active + 1 : 0;
    }

    public selectSlide(index: number): void {
        this.animation = 'slide-down';
        this.active = index;
    }

}
