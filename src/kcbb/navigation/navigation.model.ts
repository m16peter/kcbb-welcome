export class Link {

    public link: string;

    // TODO: based on type ('dashboard', 'article')
    public type: string = 'article_name';

    constructor(data: any) {

        try {
            this.link = data[ this.type ];
        } catch (e) {
            this.link = '';
        }

    }

}

export class Navigation {

    public links: Link[];

    constructor(data: any) {

        this.links = [];

        try {

            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    this.links.push(new Link(data[key]));
                }
            }

        } catch (e) {
            this.links = [];
        }

    }

}
