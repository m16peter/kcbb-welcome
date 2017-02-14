import { Component, Input } from '@angular/core';

@Component({
    selector: 'slider',
    templateUrl: './slider.html',
    styleUrls: ['./slider.css']
})

export class SliderComponent {

    @Input() slider: any;

    public slides: any;
    public active: number;

    constructor() {
        this.slides = [];
        this.active = 0;
    }

    ngOnInit() {
        this.slider['slides'].forEach(url => {
            this.slides.push(url);
        });
    }

    public previousSlide(): void {
        this.active = this.active > 0 ? this.active - 1 : this.slides.length - 1;
    }

    public nextSlide(): void {
        this.active = this.active < this.slides.length - 1 ? this.active + 1 : 0;
    }

    public selectSlide(index: number): void {
        this.active = index;
    }

}
