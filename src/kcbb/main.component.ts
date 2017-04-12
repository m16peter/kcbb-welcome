import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from './http.service';

import { Navigation } from '../kcbb/navigation/navigation.model';
import { Slider } from '../kcbb/blocks/slider/slides.model';
import { Article } from '../kcbb/content/article/article.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent implements AfterViewInit {

    public main: any;

    constructor(private httpService: HttpService, private router: Router) {

        this.main = {
            'slider': {
                'slides': [],
                'active': -1,
                'animation': ''
            },
            'navigation': [],
            'content': {
                'dashboard': {},
                'articles': [],
                'loading': true
            },
            'popup': {
                'active': false
            }
        };

    }

    // init slider & navigation
    ngAfterViewInit(): void {
        this.get('/slider/images', 'slides');
        this.get('/links', 'navigation');
    }

    private get(url: string, callback: string, params: any = {}): void {

        this.httpService
            .get(url)
                .subscribe(data => {
                    this.switchCallback(data, callback, params);
                }, error => {
                    this.switchCallback([], callback, params);
                }
            );

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

        const navigation: Navigation = new Navigation(data);
        this.main.navigation = navigation.links;

        this.main.navigation.forEach((id) => {

            // TODO: init based on type ('dashboard', 'article')
            this.main.content.pages[id.link] = {
                'title': '',
                'description': '',
                'loaded': false
            };

        });

    }

    private loadSlides(data: any): void {
        this.main['slider'] = new Slider(data);
    }

    private loadContent(data: any, id: string): void {

        // TODO: load based on type ('dashboard', 'article')
        const article = new Article(data);

        this.main['content'].pages[id].title = article.title;
        this.main['content'].pages[id].description = article.content;

        // hide loader
        this.main['content'].pages[id].loaded = true;
        this.main.content.loading = false;

    }

    public activateLink(id: string): void {

        // TODO: based on type
        if (this.main.content.pages[id].loaded) {

            this.router.navigate([id, this.main['content'].pages[id]]);

        } else {

            this.main.content.loading = true;
            this.get('/article/' + id, 'content', id);

        }

    }

    public closePopup(): void {
        this.main['popup'].active = false;
    }

    public openPopup(): void {
        this.main['popup'].active = true;
    }

}
