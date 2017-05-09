import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../services/http/http.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.html',
    styleUrls: ['./navigation.less']
})

export class NavigationComponent implements OnInit {

    public navigation: any;

    @Input() path;
    @Input() showMenu;

    @Output() navigate = new EventEmitter();
    @Output() toggle = new EventEmitter();

    constructor(private httpService: HttpService) {

        this.navigation = {
            'dashboard': {},
            'articles': [],
            'loading': true
        };

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
        this.navigation.loading = false;
    }

    public nagivateMenu(id: string): void {
        this.navigate.emit(id);
    }

    public toggleMenu(): void {
        this.toggle.emit();
    }

}
