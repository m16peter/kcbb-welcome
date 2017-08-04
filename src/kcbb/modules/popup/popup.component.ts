import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Popup } from './popup.model';

@Component({
    selector: 'kcbb-popup',
    templateUrl: './popup.html',
    styleUrls: ['./popup.less']
})

export class PopupComponent {

    private PATH: string;

    @Input() popup: Popup;

    constructor() {
        this.PATH = '/assets/app/img/';
    }

    public img(filename: string): string {
        return this.PATH + filename;
    }

    public close(): void {
        this.popup['isVisible'] = false;
    }

}
