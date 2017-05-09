import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { Article } from './article.model';

@Component({
    selector: 'app-article',
    templateUrl: './article.html',
    styleUrls: ['./article.less']
})

export class ArticleComponent implements OnInit {

    public article: any;
    public loading: boolean;

    constructor(private route: ActivatedRoute, private httpService: HttpService) {}

    ngOnInit(): void {

        this.route.params.subscribe(() => {

            this.loading = true;

            this.httpService
                .get( '/article/' + this.route.params['value']['article-id'] )
                .subscribe(data => {
                    this.article = new Article(data);
                    this.loading = false;
                });

        });

    }

}
