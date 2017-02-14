import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.html',
    styleUrls: ['./nav-bar.css']
})

export class NavBarComponent {

    @Input() active: boolean;
    @Output() activeLink = new EventEmitter();

    public menuIsActive: boolean = false;

    public activateLink(link: string): void {
        this.activeLink.emit(link);
        this.hideMenu();
    }

    public toggleMenu(): void {
        this.menuIsActive = !this.menuIsActive;
    }

    public hideMenu(): void {
        this.menuIsActive = false;
    }

}
