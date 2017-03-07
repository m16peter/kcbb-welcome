export class Article {

    public title: string;
    public content: string;

    constructor(data: any) {

        // DB config
        const db_title = 'article_title';
        const db_content = 'article_content';

        try {
            // try collecting the data
            this.title = data[0][db_title];
            this.content = data[0][db_content];

        } catch (e) {
            // retrieve empty strings
            console.log(e.message);
            this.title = this.content = '';

        }

    }

}
