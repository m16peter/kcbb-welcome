export class Slide {

    public url: string;

    constructor(obj: any) {

        const db_url = 'path_to_img'; // DB: table_name

        try {

            this.url = obj[db_url];

        } catch (e) {

            // console.log(e.message);
            this.url = '#';

        }

    }

}

export class Slider {

    public slides: Slide[];
    public active: number = 0;
    public animation: string = 'active';

    constructor(data: any) {

        this.slides = [];

        try {

            data.forEach((obj) => {
                this.slides.push(new Slide(obj));
            });

        } catch (e) {

            // console.log(e.message);
            this.slides = []; // no images
            this.active = -1; // inactive

        }

    }

}
