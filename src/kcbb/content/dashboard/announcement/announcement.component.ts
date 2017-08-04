import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'kcbb-announcement',
    templateUrl: './announcement.html',
    styleUrls: ['./announcement.less']
})

export class AnnouncementComponent {

    @Input() title;
    @Output() openPopup = new EventEmitter();

    public openPopupEvent(): void {
        this.openPopup.emit();
    }

}
