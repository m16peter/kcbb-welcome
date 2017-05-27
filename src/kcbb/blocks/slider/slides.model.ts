export class Slider {

    public slides: any = [];
    public active: number;
    public animation: string;

    constructor(data: any) {

        // .json config
        const PATH = 'src';
        const WIDTH = 'width';
        const HEIGHT = 'height';

        try {

            if (data.length > 0) {

                data.forEach((slide) => {
                    this.slides.push({
                        'src': slide[PATH],
                        'width': slide[WIDTH],
                        'height': slide[HEIGHT]
                    });
                });

                // randomized initial slide
                this.active = Math.floor((Math.random() * (data.length))); // 0
                this.animation = 'active';

            } else {

                this.active = -1; // inactive

            }

        } catch (e) {

            this.slides = []; // no images
            this.active = -1; // inactive

        }

    }

}
