import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Popup } from '../../modules/popup/popup.model';
import { Dashboard } from './dashboard.model';

@Component({
    selector: 'kcbb-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.less']
})

export class DashboardComponent {

    public dashboard: any  = {
        'events': [],
        'announcements': [],
        'loading': true
    };

    public popup: Popup;

    constructor(private httpService: HttpService) {
        this.get();
        this.popup = new Popup();
    }

    private get(): void {
        this.httpService.get('app.json').subscribe(app => {
            this.httpService.get('dashboard.json').subscribe(data => {
                this.dashboard = new Dashboard(data, app['lang']).dashboard;
            });
        });
    }

    public openEventPopup(event: any): void {

        const desc = '<h3>' + event['desc'] + '</h3>';
        const descMore = (event['desc-more'] !== '' ? '<p>' + event['desc-more'] + '</p>' : '');

        this.popup['title'] = event.title;
        this.popup['content'] = desc + descMore;

        this.popup['isVisible'] = true;

    }

    public openAnnouncementPopup(announcement: any): void {

        this.popup['title'] = announcement.title;
        this.popup['content'] = announcement.desc;

        this.popup['isVisible'] = true;

    }

}
