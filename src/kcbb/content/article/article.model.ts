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
