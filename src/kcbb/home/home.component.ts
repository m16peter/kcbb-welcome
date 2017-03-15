import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.less']
})

export class HomeComponent {

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
