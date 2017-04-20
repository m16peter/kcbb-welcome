export class Articles {

    public links: any = [];

    constructor(data: any) {

        // DB config
        const db_id = 'article_id';
        const db_title = 'article_title';

        try {

            data.forEach(article => {
                this.links.push({
                    'id': 'article/' + article[db_id],
                    'title':  article[db_title]
                });
            });

        } catch (e) {
            this.links = [];
        }

    }

}

export class Article {

    public content: string = '';

    constructor(data: any) {

        // DB config
        const db_content = 'article_content';

        try {
            this.content = data[db_content];
        } catch (e) {}

    }

}
