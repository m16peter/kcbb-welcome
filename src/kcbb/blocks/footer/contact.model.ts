export class Contact {

    public items: any = [];

    constructor(data: any) {

        data.forEach((item) => {

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
