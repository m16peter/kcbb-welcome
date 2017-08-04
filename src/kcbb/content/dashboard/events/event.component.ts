import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'kcbb-event',
    templateUrl: './event.html',
    styleUrls: ['./event.less']
})

export class EventComponent {

    @Input() event;
    @Output() openPopup = new EventEmitter();

    public openPopupEvent(): void {
        this.openPopup.emit();
    }

}
