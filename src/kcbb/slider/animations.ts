import { AnimationEntryMetadata, trigger, state, style, transition, animate, keyframes } from '@angular/core';

export const sliderAnimations: AnimationEntryMetadata =
    trigger('animateSlide', [
        state('down, previous, next, active',
            style({
                visibility: "visible"
            })
        ),
        state('inactive',
            style({
                visibility: "hidden"
            })
        ),
        // active -> inactive
        transition('down => inactive', [
            animate(300, keyframes([
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 50
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 50
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 50
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 50
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(0.5, 0.5)',
                    zIndex: 50
                })
            ]))
        ]),
        transition('previous => inactive', [
            animate(300, keyframes([
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 100
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 100
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(-10%, -20%, 0) scale(0.8, 0.8)',
                    zIndex: 100
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(-35%, -60%, 0) scale(0.4, 0.4)',
                    zIndex: 100
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(-50%, -100%, 0) scale(0, 0)',
                    zIndex: 100
                })
            ]))
        ]),
        transition('next => inactive', [
            animate(300, keyframes([
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 50
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 50
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 50
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 50
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(0.5, 0.5)',
                    zIndex: 50
                })
            ]))
        ]),
        // inactive -> active
        transition('inactive => down', [
            animate(300, keyframes([
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, -100%, 0) scale(0, 0)',
                    zIndex: 100
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, -60%, 0) scale(0.4, 0.4)',
                    zIndex: 100
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, -20%, 0) scale(0.8, 0.8)',
                    zIndex: 100
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 100
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 100
                })
            ]))
        ]),
        transition('inactive => previous', [
            animate(300, keyframes([
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(0.5, 0.5)',
                    zIndex: 50
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 50
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 50
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 50
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 50
                })
            ]))
        ]),
        transition('inactive => next', [
            animate(300, keyframes([
                style({
                    visibility: "visible",
                    transform: 'translate3d(-50%, -100%, 0) scale(0, 0)',
                    zIndex: 100
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(-35%, -60%, 0) scale(0.4, 0.4)',
                    zIndex: 100
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(-10%, -20%, 0) scale(0.8, 0.8)',
                    zIndex: 100
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 100
                }),
                style({
                    visibility: "visible",
                    transform: 'translate3d(0, 0, 0) scale(1, 1)',
                    zIndex: 100
                })
            ]))
        ])
    ]);
