export class Articles {

    public title: string;
    public items: any = [];

    constructor(data: any) {

        const CONTENT: string = 'article_content';
        const ITEMS: string = 'article_items';

        try {

            this.title = data[CONTENT];

            data[ITEMS].forEach((item) => {
                this.items.push({
                    'id': item.id,
                    'title': item.title
                });
            });

        } catch (e) {
            // console.log(e);
            this.title = '';
            this.items = [];
        }

    }

}
