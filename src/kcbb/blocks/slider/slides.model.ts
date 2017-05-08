export class Slider {

    public slides: any = [];
    public active: number;
    public animation: string;

    constructor(data: any) {

        // DB config
        const db_path = 'src';
        const db_w = 'width';
        const db_h = 'height';

        try {

            if (data.length > 0) {

                data.forEach((slide) => {
                    this.slides.push({
                        'src': slide[db_path],
                        'width': slide[db_w],
                        'height': slide[db_h]
                    });
                });

                this.active = 0;
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
