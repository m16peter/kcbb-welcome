import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.html',
    styleUrls: ['./popup.less']
})

export class PopupComponent {

    @Input() data;
    @Output() close = new EventEmitter();

    public emitClose(): void {
        this.close.emit();
    }

}
