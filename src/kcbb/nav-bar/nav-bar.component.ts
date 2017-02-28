import { Component, Input, Output, EventEmitter, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.html',
    styleUrls: ['./nav-bar.css'],
    animations: [
        trigger('animateMenu', [
            /* STATES */
            state('opened', style({height: '60px'})),
            state('closed', style({height: '0'})),
            /* STYLES */
            transition('opened => closed', [
                animate(100, keyframes([
                    style({height: '60px'}),
                    style({height: '0'})
                ]))
            ]),
            transition('closed => opened', [
                animate(100, keyframes([
                    style({height: '0'}),
                    style({height: '60px'})
                ]))
            ])
        ])
    ]
})

export class NavBarComponent {

    @Input() navBar: any;
    @Output() activate = new EventEmitter();

    public menu: any;

    constructor() {
        this.menu = {
            'animate': 'closed',
            'active': false
        }
    }

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
