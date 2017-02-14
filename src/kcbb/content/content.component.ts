import { Component, Input } from '@angular/core';

@Component({
    selector: 'content',
    templateUrl: './content.html',
    styleUrls: ['./content.css']
})

export class ContentComponent {

    @Input() content: any;
    @Input() activeLink: number;

}
