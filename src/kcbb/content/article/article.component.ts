import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-article',
    templateUrl: './article.html',
    styleUrls: ['./article.less']
})

export class ArticleComponent implements OnInit {

    public data: any;

    constructor(private route: ActivatedRoute) {

        this.data = {
            'loading': true,
            'title': '',
            'description': ''
        };

    }

    ngOnInit(): void {

        console.log( this.route.params['value'] ); // ['article-id']
        // this.route.params.forEach((params: Params) => {
        //
        //     (params['article-id'] !== undefined) ? console.log('params', params['article-id']) : console.log('no params');
        //
        // });

    }

}
