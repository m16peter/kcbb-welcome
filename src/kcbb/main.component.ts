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
        this.main['slider'].slides = [
            '/assets/img/1.jpg',
            '/assets/img/2.jpg',
            '/assets/img/3.jpg'
        ];
        // link names
        this.main['nav-bar'] = {
            'active-link': 0
        };
        // content (title: string & description: html)
        this.main['content'] = [
            {
                'title': 'Lorem Ipsum',
                'description': ''
            },
            {
                'title': 'Čo je to Lorem Ipsum?',
                'description': '<p>Lorem Ipsum je fiktívny text, používaný pri návrhu tlačovín a typografie. Lorem Ipsum je štandardným výplňovým textom už od 16. storočia, keď neznámy tlačiar zobral sadzobnicu plnú tlačových znakov a pomiešal ich, aby tak vytvoril vzorkovú knihu. Prežil nielen päť storočí, ale aj skok do elektronickej sadzby, a pritom zostal v podstate nezmenený. Spopularizovaný bol v 60-tych rokoch 20.storočia, vydaním hárkov Letraset, ktoré obsahovali pasáže Lorem Ipsum, a neskôr aj publikačným softvérom ako Aldus PageMaker, ktorý obsahoval verzie Lorem Ipsum.</p>'
            },
            {
                'title': 'Prečo ho používame?',
                'description': '<p>Je dávno známe, že ak je zrozumiteľný obsah stránky, na ktorej rozloženie sa čitateľ díva, jeho pozornosť je rozptýlená.</p>' +
                               '<p>Dôvodom použitia Lorem Ipsum je fakt, že má viacmenej normálne rozloženie písmen, takže oproti použitiu "Sem príde text, sem príde text" sa obsah vypĺňanej oblasti na stránke viac podobá na skutočný text. Mnohé balíky publikačného softvéru a editorov webových stránok už používajú Lorem Ipsum ako predvolený výplňový text a keď dáte na internete vyhľadávať "lorem ipsum", objavíte mnoho webových stránok v rannom štádiu ich vzniku. V minulých rokoch sa objavilo mnoho verzií tohto textu, niekedy náhodou, niekedy úmyselne (pridaný humor a podobne).</p>'
            },
            {
                'title': 'Odkiaľ pochádza?',
                'description': '<p>Napriek všeobecnému presvedčeniu nie je Lorem Ipsum len náhodný text. Jeho korene sú v časti klasickej latinskej literatúry z roku 45 pred n.l., takže má viac ako 2000 rokov. Richard McClintock, profesor latinčiny na Hampden-Sydney College vo Virgínii, hľadal jedno z menej určitých latinských slov, consectetur, z pasáže Lorem Ipsum, a ako vyhľadával výskyt tohto slova v klasickej literatúre, objavil jeho nepochybný zdroj. Lorem Ipsum pochádza z odsekov 1.10.32 a 1.10.33 Cicerovho diela "De finibus bonorum et malorum" (O najvyššom dobre a zle), napísaného v roku 45 pred n.l. Táto kniha je pojednaním o teórii etiky, a bola veľmi populárna v renesancii. Prvý riadok Lorem Ipsum, "Lorem ipsum dolor sit amet..", je z riadku v odseku 1.10.32.</p>' +
                               '<p>Napriek všeobecnému presvedčeniu nie je Lorem Ipsum len náhodný text. Jeho korene sú v časti klasickej latinskej literatúry z roku 45 pred n.l., takže má viac ako 2000 rokov. Richard McClintock, profesor latinčiny na Hampden-Sydney College vo Virgínii, hľadal jedno z menej určitých latinských slov, consectetur, z pasáže Lorem Ipsum, a ako vyhľadával výskyt tohto slova v klasickej literatúre, objavil jeho nepochybný zdroj. Lorem Ipsum pochádza z odsekov 1.10.32 a 1.10.33 Cicerovho diela "De finibus bonorum et malorum" (O najvyššom dobre a zle), napísaného v roku 45 pred n.l. Táto kniha je pojednaním o teórii etiky, a bola veľmi populárna v renesancii. Prvý riadok Lorem Ipsum, "Lorem ipsum dolor sit amet..", je z riadku v odseku 1.10.32.</p>' +
                               '<p>Napriek všeobecnému presvedčeniu nie je Lorem Ipsum len náhodný text. Jeho korene sú v časti klasickej latinskej literatúry z roku 45 pred n.l., takže má viac ako 2000 rokov. Richard McClintock, profesor latinčiny na Hampden-Sydney College vo Virgínii, hľadal jedno z menej určitých latinských slov, consectetur, z pasáže Lorem Ipsum, a ako vyhľadával výskyt tohto slova v klasickej literatúre, objavil jeho nepochybný zdroj. Lorem Ipsum pochádza z odsekov 1.10.32 a 1.10.33 Cicerovho diela "De finibus bonorum et malorum" (O najvyššom dobre a zle), napísaného v roku 45 pred n.l. Táto kniha je pojednaním o teórii etiky, a bola veľmi populárna v renesancii. Prvý riadok Lorem Ipsum, "Lorem ipsum dolor sit amet..", je z riadku v odseku 1.10.32.</p>' +
                               '<p>Napriek všeobecnému presvedčeniu nie je Lorem Ipsum len náhodný text. Jeho korene sú v časti klasickej latinskej literatúry z roku 45 pred n.l., takže má viac ako 2000 rokov. Richard McClintock, profesor latinčiny na Hampden-Sydney College vo Virgínii, hľadal jedno z menej určitých latinských slov, consectetur, z pasáže Lorem Ipsum, a ako vyhľadával výskyt tohto slova v klasickej literatúre, objavil jeho nepochybný zdroj. Lorem Ipsum pochádza z odsekov 1.10.32 a 1.10.33 Cicerovho diela "De finibus bonorum et malorum" (O najvyššom dobre a zle), napísaného v roku 45 pred n.l. Táto kniha je pojednaním o teórii etiky, a bola veľmi populárna v renesancii. Prvý riadok Lorem Ipsum, "Lorem ipsum dolor sit amet..", je z riadku v odseku 1.10.32.</p>' +
                               '<p>Napriek všeobecnému presvedčeniu nie je Lorem Ipsum len náhodný text. Jeho korene sú v časti klasickej latinskej literatúry z roku 45 pred n.l., takže má viac ako 2000 rokov. Richard McClintock, profesor latinčiny na Hampden-Sydney College vo Virgínii, hľadal jedno z menej určitých latinských slov, consectetur, z pasáže Lorem Ipsum, a ako vyhľadával výskyt tohto slova v klasickej literatúre, objavil jeho nepochybný zdroj. Lorem Ipsum pochádza z odsekov 1.10.32 a 1.10.33 Cicerovho diela "De finibus bonorum et malorum" (O najvyššom dobre a zle), napísaného v roku 45 pred n.l. Táto kniha je pojednaním o teórii etiky, a bola veľmi populárna v renesancii. Prvý riadok Lorem Ipsum, "Lorem ipsum dolor sit amet..", je z riadku v odseku 1.10.32.</p>'
            },
            {
                'title': 'Kde ho môžem získať?',
                'description': '<p>Existuje mnoho podôb pasáží Lorem Ipsum, ale väčšina trpela rôznymi zmenami, vložením humoru, alebo náhodných slov, ktoré nevyzerajú ani trocha dôveryhodne.<br><br><br><br><br><br> Ak sa chystáte použiť pasáž z Lorem Ipsum, mali by ste sa presvedčiť, že uprostred textu nie je skrytá žiadna časť, ktorá by vás mohla priviesť do nepríjemnej situácie. Všetky generátory Lorem Ipsum na internete opakujú vopred definované časti textu, takže náš generátor je prvým skutočným generátorom na internete. Používa slovník viac ako 200 latinských slov, a kombinuje ich niekoľkými modelovými vetnými štruktúrami, takže generuje Lorem Ipsum, ktoré vyzerá hodnoverne. Vygenerované Lorem Ipsum je týmto spôsobom vždy bez opakujúcich sa častí, bez vtipov a nenáležitých výrazov, atď.</p>'
            }
        ];
    }

    public activateLink(link: string): void {
        this.main['nav-bar']['active-link'] = link;
    }

}
