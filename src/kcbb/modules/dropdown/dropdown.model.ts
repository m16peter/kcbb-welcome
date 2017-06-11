export class Dropdown {

    public list: any;
    public title: string;
    public selected: number;
    public isVisible: boolean;
    public centerTitle: boolean;
    public centerListItems: boolean;
    public titleAsSelectedItem: boolean;
    public src: string;

    constructor(list: any) {
        this.setList(list);
        this.title = 'Select Item';
        this.selected = -1;
        this.isVisible = false;
        this.centerTitle = false;
        this.centerListItems = false;
        this.titleAsSelectedItem = false;
        this.src = '';
    }

    public setCenterTitle(): void {
        this.centerTitle = true;
    }

    public setCenterListItems(): void {
        this.centerListItems = true;
    }

    public setTitleImage(src: string): void {
        this.src = src;
    }

    public setTitleToSelectedItem(): void {
        this.titleAsSelectedItem = true;
    }

    public setList(list: any): void {

        try {
            this.list = list;
        } catch (e) {
            this.list = [];
        }

    }

    public setTitle(title: string): void {

        try {
            this.title = title;
        } catch (e) {
            this.title = '';
        }

    }

    public select(index: number): void {

        try {

            this.selected = index;
            if (this.titleAsSelectedItem) {
                this.setTitle(this.list[index]);
            }

        } catch (e) {
            this.selected = -1;
        }

    }

    public hide(): void {
        this.isVisible = false;
    }

    public toggle(): void {
        this.isVisible = !this.isVisible;
    }

}
