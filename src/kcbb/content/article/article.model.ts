/*
navigation.json
{
    "data": [
        {
            "type": "article",
            "title": "Article Title",
            "id": "article/article-id",
            "src": "path/to/icon.png"/"",
            "show": true/false
        }
    ]
}

article/article-id.json
{
    "data": {
        "html": "<div></div>"
    }
}
*/

export class Article {

    public html: string;

    constructor(data: any) {

        try {
            this.html = data['html'];
        } catch (e) {
            this.html = '';
        }

    }

}
