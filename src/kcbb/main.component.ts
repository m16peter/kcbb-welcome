import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { HttpService } from './services/http/http.service';
import { Articles } from './content/article/article.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent implements OnInit {

    public main: any;

    @ViewChild('container') container;

    @HostListener('window:resize', ['$event']) onResize() {
        this.resize();
    }

    constructor(private httpService: HttpService) {

        this.main = {
            'navigation': {
                'dashboard': {
                    'id': '/dashboard',
                    'title': 'KC BB'
                },
                'articles': []
            },
            'popup': {
                'active': false
            },
            'browser': {
                'width': 0,
                'height': 0,
                'supported': true
            }
        };

        // init navigation
        this.init();

    }

     ngOnInit() {
        this.resize();
    }

    private resize(): void {
        this.main.browser['width'] = this.container.nativeElement.offsetParent.offsetWidth;
    }

    private init(): void {

        this.httpService
            .get('/articles')
            .subscribe(data => {
                    const articles = new Articles(data);
                    this.main.navigation.articles = articles.links;
                }, error => {}
            );

    }

    public closePopup(): void {
        this.main.popup.active = false;
    }

    public openPopup(): void {
        this.main.popup.active = true;
    }

}
