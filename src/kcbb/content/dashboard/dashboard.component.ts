import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.less']
})

export class DashboardComponent {

    public loading: boolean;
    public dashboard: any;

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

    }

    private get(): void {

        const LINK: string = 'dashboard.json';
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
                            'weekday': now.getDay(),
                            'dd': now.getDate(),
                            'mm': now.getMonth(),
                            'yyyy': now.getFullYear()
                        };

                        // console.log(today);
                        // TODO: deal with exceptions (item.event['except-dates'])

                        today['day'] = today['dd'];
                        today['month'] = this.getMonth(today['mm']);

                        let ev = {
                            'interval': item.event['interval'],
                            'day': today['day'],
                            'month': today['month']
                        };

                        this.dashboard.events.push({
                            'isVisible': false,
                            'title': item['title'],
                            'desc': item['description'],
                            'desc-more': item['description-more'],
                            'event': ev
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

}
