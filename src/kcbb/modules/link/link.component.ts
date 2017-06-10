import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-link',
    templateUrl: './link.html',
    styleUrls: ['./link.less']
})

export class LinkComponent {

    @Input() link;

    public notEmpty(str: string): boolean {
        return (str !== '');
    }

}
