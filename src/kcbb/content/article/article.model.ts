export class Article {

    public content: string;

    constructor(data: any) {

        const CONTENT: string = 'article_content';

        try {
            this.content = data[CONTENT];
        } catch (e) {
            this.content = '';
        }

    }

}
