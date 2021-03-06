/*

slider.json
{
    "data": [
        {
            "src": "assets/admin/img/slider/image.extension",
            "width": 1920/(width in px),
            "height": 500/(height in px),
            "url": ""
        }
    ]
}

*/
export class Slider {

    public slides: any = [];
    public active: number;
    public animation: string;

    constructor(data: any) {

        const PATH = 'src';
        const WIDTH = 'width';
        const HEIGHT = 'height';
        const URL = 'url';

        try {

            if (data.length > 0) {

                data.forEach((slide) => {
                    this.slides.push({
                        'src': slide[PATH],
                        'width': slide[WIDTH],
                        'height': slide[HEIGHT],
                        'url': slide[URL]
                    });
                });

                this.active = Math.floor((Math.random() * (data.length)));
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
