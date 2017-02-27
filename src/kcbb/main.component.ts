import { Component } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.css']
})

export class MainComponent {

    public main: any;

    constructor() {
        this.main = {
            "slider": {},
            "nav-bar": {},
            "content": {}
        };
        // url-paths to slides...
        this.main['slider'].slides = [];
        for (let i = 1; i < 4; i++) {
            let url: string = '/kcbb-welcome/assets/img/' + i + '.jpg';
            this.main['slider'].slides.push(url);
        }
        // link names
        this.main['nav-bar'] = {
            'active-link': 0
        };
        // content (title: string & description: html)
        this.main['content'] = [
            {
                'title': 'Lorem Ipsum',
                'description': '<p>Lorem Ipsum je fiktívny text, používaný pri návrhu tlačovín a typografie. Lorem Ipsum je štandardným výplňovým textom už od 16. storočia, keď neznámy tlačiar zobral sadzobnicu plnú tlačových znakov a pomiešal ich, aby tak vytvoril vzorkovú knihu. Prežil nielen päť storočí, ale aj skok do elektronickej sadzby, a pritom zostal v podstate nezmenený. Spopularizovaný bol v 60-tych rokoch 20.storočia, vydaním hárkov Letraset, ktoré obsahovali pasáže Lorem Ipsum, a neskôr aj publikačným softvérom ako Aldus PageMaker, ktorý obsahoval verzie Lorem Ipsum.</p>'
            },
            {
                'title': 'Odkiaľ pochádza Lorem Ipsum?',
                'description': '<p>Napriek všeobecnému presvedčeniu nie je Lorem Ipsum len náhodný text. Jeho korene sú v časti klasickej latinskej literatúry z roku 45 pred n.l., takže má viac ako 2000 rokov. Richard McClintock, profesor latinčiny na Hampden-Sydney College vo Virgínii, hľadal jedno z menej určitých latinských slov, consectetur, z pasáže Lorem Ipsum, a ako vyhľadával výskyt tohto slova v klasickej literatúre, objavil jeho nepochybný zdroj. Lorem Ipsum pochádza z odsekov 1.10.32 a 1.10.33 Cicerovho diela "De finibus bonorum et malorum" (O najvyššom dobre a zle), napísaného v roku 45 pred n.l. Táto kniha je pojednaním o teórii etiky, a bola veľmi populárna v renesancii. Prvý riadok Lorem Ipsum, "Lorem ipsum dolor sit amet..", je z riadku v odseku 1.10.32.</p>' +
                               '<p>Napriek všeobecnému presvedčeniu nie je Lorem Ipsum len náhodný text. Jeho korene sú v časti klasickej latinskej literatúry z roku 45 pred n.l., takže má viac ako 2000 rokov. Richard McClintock, profesor latinčiny na Hampden-Sydney College vo Virgínii, hľadal jedno z menej určitých latinských slov, consectetur, z pasáže Lorem Ipsum, a ako vyhľadával výskyt tohto slova v klasickej literatúre, objavil jeho nepochybný zdroj. Lorem Ipsum pochádza z odsekov 1.10.32 a 1.10.33 Cicerovho diela "De finibus bonorum et malorum" (O najvyššom dobre a zle), napísaného v roku 45 pred n.l. Táto kniha je pojednaním o teórii etiky, a bola veľmi populárna v renesancii. Prvý riadok Lorem Ipsum, "Lorem ipsum dolor sit amet..", je z riadku v odseku 1.10.32.</p>' +
                               '<p>Napriek všeobecnému presvedčeniu nie je Lorem Ipsum len náhodný text. Jeho korene sú v časti klasickej latinskej literatúry z roku 45 pred n.l., takže má viac ako 2000 rokov. Richard McClintock, profesor latinčiny na Hampden-Sydney College vo Virgínii, hľadal jedno z menej určitých latinských slov, consectetur, z pasáže Lorem Ipsum, a ako vyhľadával výskyt tohto slova v klasickej literatúre, objavil jeho nepochybný zdroj. Lorem Ipsum pochádza z odsekov 1.10.32 a 1.10.33 Cicerovho diela "De finibus bonorum et malorum" (O najvyššom dobre a zle), napísaného v roku 45 pred n.l. Táto kniha je pojednaním o teórii etiky, a bola veľmi populárna v renesancii. Prvý riadok Lorem Ipsum, "Lorem ipsum dolor sit amet..", je z riadku v odseku 1.10.32.</p>' +
                               '<p>Napriek všeobecnému presvedčeniu nie je Lorem Ipsum len náhodný text. Jeho korene sú v časti klasickej latinskej literatúry z roku 45 pred n.l., takže má viac ako 2000 rokov. Richard McClintock, profesor latinčiny na Hampden-Sydney College vo Virgínii, hľadal jedno z menej určitých latinských slov, consectetur, z pasáže Lorem Ipsum, a ako vyhľadával výskyt tohto slova v klasickej literatúre, objavil jeho nepochybný zdroj. Lorem Ipsum pochádza z odsekov 1.10.32 a 1.10.33 Cicerovho diela "De finibus bonorum et malorum" (O najvyššom dobre a zle), napísaného v roku 45 pred n.l. Táto kniha je pojednaním o teórii etiky, a bola veľmi populárna v renesancii. Prvý riadok Lorem Ipsum, "Lorem ipsum dolor sit amet..", je z riadku v odseku 1.10.32.</p>' +
                               '<p>Napriek všeobecnému presvedčeniu nie je Lorem Ipsum len náhodný text. Jeho korene sú v časti klasickej latinskej literatúry z roku 45 pred n.l., takže má viac ako 2000 rokov. Richard McClintock, profesor latinčiny na Hampden-Sydney College vo Virgínii, hľadal jedno z menej určitých latinských slov, consectetur, z pasáže Lorem Ipsum, a ako vyhľadával výskyt tohto slova v klasickej literatúre, objavil jeho nepochybný zdroj. Lorem Ipsum pochádza z odsekov 1.10.32 a 1.10.33 Cicerovho diela "De finibus bonorum et malorum" (O najvyššom dobre a zle), napísaného v roku 45 pred n.l. Táto kniha je pojednaním o teórii etiky, a bola veľmi populárna v renesancii. Prvý riadok Lorem Ipsum, "Lorem ipsum dolor sit amet..", je z riadku v odseku 1.10.32.</p>'
            }
        ];
    }

    public activateLink(link: string): void {
        this.main['nav-bar']['active-link'] = link;
    }

}
