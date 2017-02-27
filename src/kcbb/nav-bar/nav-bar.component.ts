import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.html',
    styleUrls: ['./nav-bar.css']
})

export class NavBarComponent {

    @Input() navBar: any;
    @Output() activate = new EventEmitter();
    @Output() clear = new EventEmitter();

    public activateLink(id: string): void {
        this.activate.emit(id);
    }

    public emptyPage(): void {
        this.clear.emit();
    }

}
