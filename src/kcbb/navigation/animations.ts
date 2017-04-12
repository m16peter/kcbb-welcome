import { AnimationEntryMetadata, trigger, state, style, transition, animate, keyframes } from '@angular/core';

export const navigationAnimations: AnimationEntryMetadata =
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
    ]);
