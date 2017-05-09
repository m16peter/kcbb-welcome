export class Slider {

    public slides: any = [];
    public active: number;
    public animation: string;

    constructor(data: any) {

        // DB config
        const db_path = 'src';
        const db_w = 'width';
        const db_h = 'height';
        const db_redirect = 'redirect';

        try {

            if (data.length > 0) {

                data.forEach((slide) => {
                    this.slides.push({
                        'src': slide[db_path],
                        'width': slide[db_w],
                        'height': slide[db_h],
                        'redirect': slide[db_redirect]
                    });
                });

                // random
                const random = Math.floor((Math.random() * (data.length)));

                this.active = random; // 0
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
