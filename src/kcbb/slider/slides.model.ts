export class Slide {

    public url: string;

    constructor(obj: any) {

        // DB config
        const db_url = 'path_to_img';

        try {

            this.url = obj[db_url];

        } catch (e) {

            console.log(e.message);
            this.url = '#';

        }

    }

}

export class Slider {

    public slides: any;
    public active: number = 0;
    public animation: string = 'active';

    constructor(data: any) {

        this.slides = [];

        try {

            data.forEach((obj)=> {
                this.slides.push(new Slide(obj));
            });

        } catch (e) {

            console.log(e.message);
            this.slides = [];
            this.active = -1;

        }

    }

}
