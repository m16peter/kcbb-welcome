import { Component } from '@angular/core';

import { HttpService } from './../modules/http/http.service';
import { Navigation } from './nav-bar/navigation.model';
import { Slider } from './slider/slides.model';
import { Article } from './content/article.model';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent {

    public main: any;

    constructor(private httpService: HttpService) {
        this.main = {
            "slider": {
                'slides': [],
                'active': -1,
                'animation': ''
            },
            "nav-bar": {
                'active': -1, // inactive
                'logo': 'Apoštolská Cirkev',
                'pageIDs': []
            },
            "content": {
                'pages': {},
                'data': {
                    'title': '',
                    'description': '',
                    'active': false,
                    'loading': false
                }
            }
        };
    }

    ngAfterViewInit() {
        this.get('/links', 'navigation');
    }

    private get(url: string, callback: string, params: any = {}): void {
        this.httpService
            .get(url)
                .subscribe(data => {
                    console.log('success:', data);
                    this.switchCallback(data, callback, params);
                }, error => {
                    console.log('error:', error);
                    handleError(url, callback, params);
                }
            );

        function handleError(url, callback, params) {
            if (url === '/links') {
                this.switchCallback([], callback, params);
            }
            if (url === '/article/vitajte') {
                this.switchCallback([], callback, params);
            }
            if (url === '/slider/images') {
                this.switchCallback([], callback, params);
            }
        }
    }

    private switchCallback(data, callback, params) {
        switch (callback) {
            case 'navigation': {
                this.loadNavigation(data);
                break;
            }
            case 'slides': {
                this.loadSlides(data);
                break;
            }
            case 'content': {
                this.loadContent(data, params);
                break;
            }
            default: {
                break;
            }
        }
    }

    private loadNavigation(data: any): void {

        let navigation: Navigation = new Navigation(data);
        this.main['nav-bar'].pageIDs = navigation.links;
        console.log('pageIDs', this.main['nav-bar'].pageIDs);

        if (this.main['nav-bar'].pageIDs.length > 0) {

            this.main['nav-bar'].active = 0;

            this.main['nav-bar'].pageIDs.forEach((id)=> {
                this.main['content'].pages[id.link] = {
                    'title': '',
                    'description': '',
                    'loaded': false
                }
            });

            console.log('content.pages:', this.main['content'].pages);

            this.get('/slider/images', 'slides');
        }
    }

    private loadSlides(data: any): void {

        data = [
            {
                "path_to_img": "assets/img/1.jpg"
            },
            {
                "path_to_img": "assets/img/2.jpg"
            },
            {
                "path_to_img": "assets/img/3.jpg"
            },
            {
                "path_to_img": "assets/img/4.jpg"
            }
        ];
        this.main['slider'] = new Slider(data);
        console.log('Slider:', this.main['slider']);

    }

    private loadContent(data: any, id: string): void {

        let article = new Article(data);

        // set and store title
        this.main['content'].data['title'] = article.title;
        this.main['content'].pages[id].title = article.title;

        // set and store content
        this.main['content'].data['description'] = article.content;
        this.main['content'].pages[id].description = article.content;

        // hide loader
        this.main['content'].pages[id].loaded = true;

    }

    public activateLink(id: string): void {

        this.main['content'].data['title'] = '';
        this.main['content'].data['description'] = '';
        this.main['content'].data['active'] = false;

        if (id !== this.main['nav-bar'].logo) {

            if (!this.main['content'].pages[id].loaded) {
                this.main['content'].data['loading'] = true;
                this.get('/article/' + id, 'content', id);
            } else {
                this.main['content'].data['title'] = this.main['content'].pages[id].title;
                this.main['content'].data['description'] = this.main['content'].pages[id].description;
            }

            this.main['nav-bar'].active = id;
            this.main['content'].data['loading'] = false;
            this.main['content'].data['active'] = true;
        } else {
            this.main['nav-bar'].active = this.main['nav-bar'].logo;
        }

    }

}
