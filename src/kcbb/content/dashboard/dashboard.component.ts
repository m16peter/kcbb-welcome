import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.less']
})

export class DashboardComponent implements OnInit {

    ngOnInit(): void {

        console.log('dashboard');

    }
}
