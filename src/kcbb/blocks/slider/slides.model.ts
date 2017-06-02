export class Slider {

    public slides: any = [];
    public active: number;
    public animation: string;

    constructor(data: any) {

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

                this.active = 0; // to randomize initial slide: Math.floor((Math.random() * (data.length)))
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
