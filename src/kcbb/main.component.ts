import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from './services/http/http.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent implements OnInit {

    public main: any;
    public navigation: any;
    public popup: any;

    @ViewChild('container') container;

    @HostListener('window:resize', ['$event']) onResize() {
        this.resize();
    }

    constructor(private router: Router, private httpService: HttpService) {

        this.main = {
            'browser': {
                'width': 0,
                'height': 0,
                'supported': true
            }
        };

        this.navigation = {
            'dashboard': {},
            'articles': []
        };

        this.popup = {
            'active': false
        };

        // init navigation
        this.httpService
            .get('/navigation')
            .subscribe(data => {
                data.forEach((link) => {

                    if (link.type === "dashboard") {
                        this.navigation.dashboard = {
                            'title': link.title,
                            'id': link.id,
                        };
                    } else {
                        this.navigation.articles.push({
                            'title':  link.title,
                            'id': 'article/' + link.id
                        });
                    }

                });
            });

    }

     ngOnInit() {
        this.resize();
    }

    private resize(): void {
        this.main.browser['width'] = this.container.nativeElement.offsetParent.offsetWidth;
    }

    public nagivate(id: string) {
        this.router.navigate([id]);
    }

}
