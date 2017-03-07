export class Link {

    public link: string;

    constructor(data: any) {

        // DB config
        const db_url = 'article_name';

        try {
            // try collecting the data
            this.link = data[db_url];

        } catch (e) {
            // retrieve empty strings
            console.log(e.message);
            this.link = '';

        }

    }

}

export class Navigation {

    public links;

    constructor(data: any) {

        this.links = [];

        try {

            // try collecting the data
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    this.links.push(new Link(data[key]));
                }
            }

        } catch (e) {

            // retrieve empty strings
            this.links = [];

        }

    }

}
