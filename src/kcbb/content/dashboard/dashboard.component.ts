import { Component } from '@angular/core';
import { HttpService } from '../../services/http/http.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.less']
})

export class DashboardComponent {

    public loading: boolean = true;
    public dashboard: any = [];

    constructor(private httpService: HttpService) {
        this.get();
    }

    private get(): void {

        this.httpService
            .get( '/dashboard' )
            .subscribe(data => {
                    console.log( data );
                    this.dashboard = data;
                    this.loading = false;
                }, error => {}
            );

    }
}
