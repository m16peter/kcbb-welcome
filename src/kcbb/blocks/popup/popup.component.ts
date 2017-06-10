import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.html',
    styleUrls: ['./popup.less']
})

export class PopupComponent {

    @Output() close = new EventEmitter();

    public closePopup(): void {
        this.close.emit();
    }

}
