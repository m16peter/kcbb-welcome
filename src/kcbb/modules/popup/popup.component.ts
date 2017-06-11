import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Popup } from './popup.model';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.html',
    styleUrls: ['./popup.less']
})

export class PopupComponent {

    private PATH: string;

    @Input() popup: Popup;

    @Output() closed = new EventEmitter();

    constructor() {
        this.PATH = '/assets/app/img/';
    }

    public img(filename: string): string {
        return this.PATH + filename;
    }

    public close(): void {

        // TODO: animate...
        this.popup['isVisible'] = false;
        this.closed.emit();

    }

}
