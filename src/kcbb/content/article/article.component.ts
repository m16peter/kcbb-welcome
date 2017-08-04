import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Article } from './article.model';

@Component({
    selector: 'kcbb-article',
    templateUrl: './article.html',
    styleUrls: ['./article.less']
})

export class ArticleComponent implements OnInit {

    public article: any;
    public loading: boolean;

    constructor(private route: ActivatedRoute, private httpService: HttpService) {
        this.loading = true;
    }

    ngOnInit(): void {
        this.get();
    }

    private get(): void {

        this.route.params.subscribe(() => {

            const PATH_TO_JSON = 'article/' + this.route.params['value']['article-id'] + '.json';

            this.httpService.get(PATH_TO_JSON).subscribe(data => {
                this.article = new Article(data);
                this.loading = false;
            });

        });

    }

}
