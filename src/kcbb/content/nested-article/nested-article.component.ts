import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Articles } from './nested-article.model';
import { Article } from '../article/article.model';

@Component({
    selector: 'app-nested-article',
    templateUrl: './nested-article.html',
    styleUrls: ['./nested-article.less']
})

export class NestedArticleComponent implements OnInit {

    public article: any;
    public loading: boolean;
    public loadingArticle: boolean;

    constructor(private route: ActivatedRoute, private httpService: HttpService) {
        this.init();
    }

    ngOnInit(): void {
        this.get();
    }

    private init(): void {

        this.loading = true;
        this.article = {
            'title': '',
            'content': '',
            'items': []
        };

        this.loadingArticle = false;

    }

    private get(): void {

        this.route.params.subscribe(() => {

            const LINK: string = 'articles/' + this.route.params['value']['article-id'] + '.json';

            this.httpService.get(LINK).subscribe(data => {

                const article = new Articles(data);

                this.article['title'] = article.title;
                this.article['items'] = article.items;

                this.loading = false;

            });

        });

    }

    public selectArticle(id: string): void {

        this.loadingArticle = true;
        const LINK: string = id + '.json';

        this.httpService.get(LINK).subscribe(data => {
            this.article['content'] = (new Article(data)).content;
            this.loadingArticle = false;
        });

    }

}
