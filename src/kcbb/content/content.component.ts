import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'content',
    templateUrl: './content.html',
    styleUrls: ['./content.less']
})

export class ContentComponent {

    @Input() data: any;
    @Output() open = new EventEmitter();

    private emitOpen(): void {
        this.open.emit();
    }

    public openImage(x): void {
        this.emitOpen();
    }

    public openEvent(x, y, z): void {
        this.emitOpen();
    }

}
