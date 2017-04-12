import { Component, Input, Output, EventEmitter } from '@angular/core';
import { navigationAnimations } from './animations';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.html',
    styleUrls: ['./navigation.less'],
    animations: [ navigationAnimations ]
})

export class NavigationComponent {

    @Input() navBar: any;
    @Output() activate = new EventEmitter();

    public menu: any = {
        'animate': 'closed',
        'active': false
    };

    public activateLink(id: string): void {
        this.activate.emit(id);
        this.menu.active = false;
        this.menu.animate = 'closed';
    }

    public toggleMenu(): void {
        if (this.menu.active) {
            this.menu.active = false;
            this.menu.animate = 'closed';
        } else {
            this.menu.active = true;
            this.menu.animate = 'opened';
        }
    }

}
