import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dropdown } from './dropdown.model';

@Component({
    selector: 'kcbb-dropdown',
    templateUrl: './dropdown.html',
    styleUrls: ['./dropdown.less']
})

// todo: close on scroll
export class DropdownComponent {

    @Input() dropdown: Dropdown;
    @Output() selected = new EventEmitter();

    public select(index: number): void {
        this.dropdown.select(index);
        this.dropdown.hide();
        this.selected.emit();
    }

    public toggle(): void {
        this.dropdown.toggle();
    }

    public close(): void {
        this.dropdown.hide();
    }

    public notEmpty(str: string): boolean {
        return (str !== '');
    }

}
