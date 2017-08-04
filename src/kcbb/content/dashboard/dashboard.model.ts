export class Dashboard {

    public dashboard: any;

    constructor(data: any, lang: string) {

        this.dashboard = {
            'events': [],
            'announcements': [],
            'loading': true
        };

        try {

            data.forEach((item) => {

                switch (item.type) {
                    case 'event': {

                        if (item.hide) {
                            break;
                        }

                        let now = new Date(Date.now());

                        let days = now.getDay();
                        if (days <= item.event['week-day']) {
                            now = Dashboard.addDays(now, (item.event['week-day'] - days));
                        } else {
                            now = Dashboard.addDays(now, (7 - (days - item.event['week-day'])));
                        }

                        let today = {
                            'dd': now.getDate(),
                            'mm': now.getMonth(),
                            'yyyy': now.getFullYear()
                        };

                        item.event['except-dates'].forEach((exception) => {

                            while (true) {

                                if (today.yyyy === exception.yyyy) {
                                    if (today.mm === exception.mm) {
                                        if (today.dd === exception.dd) {
                                            now = Dashboard.addDays(now, 7);
                                        } else {
                                            break;
                                        }
                                    } else {
                                        break;
                                    }
                                } else {
                                    break;
                                }

                                today = {
                                    'dd': now.getDate(),
                                    'mm': now.getMonth(),
                                    'yyyy': now.getFullYear()
                                };

                            }
                        });

                        this.dashboard.events.push({
                            'title': item['title'],
                            'desc': item['desc'],
                            'desc-more': item['desc-more'],
                            'calendar': {
                                'interval': item.event['interval'],
                                'day': today['dd'],
                                'month': Dashboard.getMonth(today['mm'], lang)
                            }
                        });

                        break;
                    }
                    case 'event-once': {

                        if (item.hide) {
                            break;
                        }

                        let now = new Date(Date.now());

                        let days = now.getDay();
                        if (days <= item.event['week-day']) {
                            now = Dashboard.addDays(now, (item.event['week-day'] - days));
                        } else {
                            now = Dashboard.addDays(now, (7 - (days - item.event['week-day'])));
                        }

                        let today = {
                            'dd': now.getDate(),
                            'mm': now.getMonth(),
                            'yyyy': now.getFullYear()
                        };

                        let isValidDate = false;
                        let n = item.event['dates'].length;

                        for (let i = 0; i < n; i++) {

                            let diff = 0; // month difference between event and today

                            if (item.event['dates'][i]['yyyy'] >= today['yyyy']) {

                                diff += 12 * (item.event['dates'][i]['yyyy'] - today['yyyy']);

                                if (item.event['dates'][i]['mm'] >= today['mm']) {

                                    diff += (item.event['dates'][i]['mm'] - today['mm']);

                                    if (diff > 0 || item.event['dates'][i]['dd'] >= today['dd']) {

                                        isValidDate = true;

                                        today['dd'] = item.event['dates'][i]['dd'];
                                        today['mm'] = item.event['dates'][i]['mm'];

                                        break;
                                    }

                                }
                            }

                        }

                        if (isValidDate) {

                            this.dashboard.events.push({
                                'title': item['title'],
                                'desc': item['desc'],
                                'desc-more': item['desc-more'],
                                'calendar': {
                                    'interval': item.event['interval'],
                                    'day': today['dd'],
                                    'month': Dashboard.getMonth(today['mm'], lang)
                                }
                            });

                        }

                        break;

                    }
                    case 'announcements': {

                        try {

                            item['content'].forEach((announcement) => {
                                if (!announcement.hide) {
                                    this.dashboard.announcements.push({
                                        'title': announcement.title,
                                        'desc': announcement.desc
                                    });
                                }
                            });

                        } catch (e) {
                            this.dashboard.announcements = [];
                            // console.log(e);
                        }

                        break;
                    }
                    default: break;
                }

            });

            // generate css for events
            for (let i = 0, n = this.dashboard.events.length; i < n; i++) {

                if (i%5 === 0) {
                    this.dashboard.events[i].css = 'lg';
                } else {
                    this.dashboard.events[i].css = 'md';
                }

            }

            this.dashboard.events[this.dashboard.events.length-1].css += ' br';

            this.dashboard.loading = false;

        } catch (e) {
            this.dashboard = {
                'events': [],
                'announcements': [],
                'loading': true
            };
            // console.log(e);
        }

    }

    private static addDays(date: Date, days: number): Date {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    private static getMonth(date: number, lang: string): string {

        if (lang === 'sk') {
            switch (date) {
                case 0: return 'Január';
                case 1: return 'Február';
                case 2: return 'Marec';
                case 3: return 'Apríl';
                case 4: return 'Máj';
                case 5: return 'Jún';
                case 6: return 'Júl';
                case 7: return 'August';
                case 8: return 'September';
                case 9: return 'Október';
                case 10: return 'November';
                case 11: return 'December';
                default: return '';
            }
        } else if (lang === 'ro') {
            switch (date) {
                case 0: return 'Ianuarie';
                case 1: return 'Februarie';
                case 2: return 'Martie';
                case 3: return 'Aprilie';
                case 4: return 'Mai';
                case 5: return 'Iunie';
                case 6: return 'Iulie';
                case 7: return 'August';
                case 8: return 'Septemberie';
                case 9: return 'Octombrie';
                case 10: return 'Noiembrie';
                case 11: return 'Decemberie';
                default: return '';
            }
        } else {
            switch (date) {
                case 0: return 'January';
                case 1: return 'February';
                case 2: return 'March';
                case 3: return 'April';
                case 4: return 'May';
                case 5: return 'June';
                case 6: return 'July';
                case 7: return 'August';
                case 8: return 'September';
                case 9: return 'October';
                case 10: return 'November';
                case 11: return 'December';
                default: return '';
            }
        }

    }

}
