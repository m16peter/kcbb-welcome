import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.html',
    styleUrls: ['./nav-bar.css']
})

export class NavBarComponent {

    @Output() activeLink = new EventEmitter();

    public activateLink(link: string): void {
        this.activeLink.emit(link);
    }

}
