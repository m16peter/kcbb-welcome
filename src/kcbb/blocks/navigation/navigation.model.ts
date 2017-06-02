export class Links {

    public links: any = [];

    constructor(data: any) {

        data.forEach((item) => {
            if (item.show) {
                this.links.push( (new Link(item)).link );
            }
        });

    }

}

class Link {

    public link: any;

    constructor(link: any) {

        try {

            this.link = {
                'id': link.id,
                'type': link.type,
                'title': link.title,
                'src': link.src,
            };

        } catch (e) {
            // console.log(e);
            this.link = {};
        }

    }

}
