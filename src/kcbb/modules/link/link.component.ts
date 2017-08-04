import { Component, Input } from '@angular/core';

@Component({
    selector: 'kcbb-link',
    templateUrl: './link.html',
    styleUrls: ['./link.less']
})

export class LinkComponent {

    @Input() link;

    public notEmpty(str: string): boolean {
        return (str !== '');
    }

}
