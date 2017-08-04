/*
{
    "data": {
        "google-maps": {
            "image": "assets/admin/img/my_image.jpg",
            "redirect": "maps.google.com"
        },
        "list": [
            {
                "title": ["Title"],
                "info": {
                    "name": "if left empty won't be visible",
                    "mail": "",
                    "phone": "",
                    "location": "",
                    "url": ""
                }
            }
        ]
    }
}
*/

export class Contact {

    public map: any;
    public list: any;

    constructor(data: any) {

        try {

            this.map = {
                'image': data['google-maps']['image'],
                'redirect': data['google-maps']['redirect']
            };

            this.list = [];

            data['list'].forEach((item) => {

                let title = [];
                item['title'].forEach((row) => {
                    title.push(row);
                });

                this.list.push({
                    'title': title,
                    'info': {
                        'name': item['info']['name'],
                        'mail': item['info']['mail'],
                        'phone': item['info']['phone'],
                        'location': item['info']['location']
                    }
                });

            });

        } catch (e) {
            this.map = {
                'image': '',
                'redirect': ''
            };
            this.list = [];
        }

    }

}
