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

            if (link.type !== 'menu') {

                this.link = {
                    'id': link.id,
                    'type': link.type,
                    'title': link.title,
                    'src': link.src,
                };

            } else {

                this.link = {
                    'id': [],
                    'type': link.type,
                    'title': link.title,
                    'src': link.src,
                };

                link.id.forEach((item) => {
                    if (item.show) {

                        this.link.id.push({
                            'id': item.id,
                            'type': item.type,
                            'title': item.title,
                            'src': item.src,
                        });

                    }
                });

            }

        } catch (e) {
            // console.log(e);
            this.link = {};
        }

    }

}
