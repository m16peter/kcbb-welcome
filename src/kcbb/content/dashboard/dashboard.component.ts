import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
// import { Popup } from '../../modules/popup/popup.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.less']
})

// TODO: show events on small device
// TODO: event location
export class DashboardComponent {

    public loading: boolean;
    public dashboard: any;
    // public popup: Popup;

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init(): void {

        this.loading = true;

        this.dashboard = {
            'events': [],
            'info': []
        };

        this.get();

        // this.popup = new Popup();

    }

    private get(): void {

        const LINK: string = 'apostolska-cirkev.json';
        this.httpService.get(LINK).subscribe(data => {
            data.forEach((item) => {

                switch (item.type) {
                    case 'event': {

                        let now = new Date(Date.now());

                        let days = now.getDay();
                        if (days <= item.event['week-day']) {
                            now = this.addDays(now, (item.event['week-day'] - days));
                        } else {
                            now = this.addDays(now, (7 - (days - item.event['week-day'])));
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
                                            now = this.addDays(now, 7);
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

                        today['month'] = this.getMonth(today['mm']);

                        let ev = {
                            'interval': item.event['interval'],
                            'location': item.event['location'],
                            'day': today['dd'],
                            'month': today['month']
                        };

                        this.dashboard.events.push({
                            'isVisible': false,
                            'title': item['title'],
                            'desc': item['description'],
                            'desc-more': item['description-more'],
                            'event': ev,
                            'isInterval': true,
                            'isLocation': false
                        });

                        break;
                    }
                    case 'info': {

                        let info: any = [];

                        item['content'].forEach((content) => {
                            info.push({
                                'title': content.title,
                                'desc': content.desc
                            });
                        });

                        this.dashboard.info.push(info);

                        break;
                    }
                    default: break;
                }

            });

            this.loading = false;

            // after init:
            setInterval(() => {
                this.dashboard.events.forEach((item) => {

                    if (item.event.location !== '') {
                        item.isLocation = !item.isLocation;
                        item.isInterval = !item.isInterval;
                    }

                });
            }, 3000);

        });

    }

    private addDays(date: Date, days: number): Date {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    private getMonth(date: number): string {
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
    }

    public notEmpty(str: string): boolean {
        return (str !== '');
    }

    public toggleReadMore(index: number): void {
        this.dashboard.events[index].isVisible = !this.dashboard.events[index].isVisible;
    }

    /* popup
    public openPopup(): void {
        this.popup['isVisible'] = true;
    }
    public popupClosed(): void {
        // console.log('popup was closed...');
    }
    */

}
