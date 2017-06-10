export class Contact {

    public items: any = [];
    public img: string;

    constructor(data: any) {

        try {
            this.img = data['img'];
        } catch (e) {
            this.img = '';
        }

        data['contact'].forEach((item) => {
            try {
                this.items.push({
                    'title': item['title'],
                    'info': {
                        'name': item['info'].name,
                        'mail': item['info'].mail,
                        'phone': item['info'].phone,
                        'location': item['info'].location
                    }
                });
            } catch (e) {
                this.items = [];
            }
        });

    }

}
