import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.html',
    styleUrls: ['./nav-bar.css']
})

export class NavBarComponent {

    @Input() navBar: any;
    @Output() activate = new EventEmitter();

    public active: boolean = false;

    public activateLink(id: string): void {
        this.activate.emit(id);
    }

    public toggleMenu(): void {
        this.active = !this.active;
    }

}
