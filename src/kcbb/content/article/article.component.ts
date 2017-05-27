import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { Article } from './article.model';

@Component({
    selector: 'app-article',
    templateUrl: './article.html',
    styleUrls: ['./article.less']
})

/**
 * desc: TODO
 * in: -
 * out: -
 */
export class ArticleComponent implements OnInit {

    public article: any;
    public loading: boolean;

    constructor(private route: ActivatedRoute, private httpService: HttpService) {
        this.init();
    }

    ngOnInit(): void {
        this.get();
    }

    private init(): void {
        this.loading = true;
    }

    private get(): void {

        this.route.params.subscribe(() => {

            const LINK: string = 'article/' + this.route.params['value']['article-id'] + '.json';

            this.httpService.get(LINK).subscribe(data => {
                this.article = new Article(data);
                this.loading = false;
            });

        });

    }

}
