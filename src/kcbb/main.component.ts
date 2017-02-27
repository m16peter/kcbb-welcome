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
            "slider": {}, "nav-bar": {}, "content": {}
        };

        // a simple animation during site load
        this.main['slider'].slides = ['/kcbb-welcome/assets/svg/loader.svg'];

        /* Request for:
            - logo-name (string)
            - page-id's (string)
            (prazdna stranka, iba id-cka stranok sa nacitaju z DB)
        */
        this.main['nav-bar'] = {
            'active': '',
            'logo': 'Apoštolská Cirkev',
            'pageIDs': [
                'O nas',
                'Kontakt'
            ]
        };
        // content (title: string & description: html)
        this.main['content'] = {
            'pages': {
                'O nas': {
                    'title': '',
                    'description': '',
                    'loaded': false
                },
                'Kontakt': {
                    'title': '',
                    'description': '',
                    'loaded': false
                }
            },
            'data': {
                'title': '',
                'description': '',
                'active': false
            }
        };

    }

    // load slide-images after all is done... (bude tam dost obrazkov, tak preto to urobime az posledne)
    ngOnInit() {
        // url-paths to slides...
        this.main['slider'].slides = [];
        for (let i = 1; i < 4; i++) {
            let url: string = '/kcbb-welcome/assets/img/' + i + '.jpg';
            this.main['slider'].slides.push(url);
        }
    }

    // this is just a simple simulation of getting content from db
    public loadContent(id: string): void {
        // show loader

        // php request
        if (id === 'O nas') {
            this.main['content'].pages[id].title = 'Kto sme';
            this.main['content'].pages[id].description = '<p>Dovoľ, aby sme Ti skôr, ako predstavíme samých seba, predstavili nášho Boha,</p> <p><strong>Pána Ježiša Krista</strong>...</p> <p><em>veríme</em></p> <p>v Jeho <strong>smrť</strong> za nás, v ktorej nám daroval odpustenie všetkých našich hriechov</p> <p>v Jeho <strong>vzkriesenie</strong>, v ktorom máme nádej na večný život</p><p  >v Jeho <strong>návrat</strong>, pri ktorom nás zhromaždí do nových príbytkov</p> <p>Sme skupina kresťanov, ktorým ide predovšetkým o osobný vzťah s Bohom. Veríme, že tento vzťah je základom kresťanského života a snažíme sa ho rozvíjať osobným životom, ako aj kresťanskou službou. Človek nájde skutočné naplnenie len vtedy, ak sa osobne rozhodne pozvať do svojho života Pána Ježiša Krista, ktorý nám dáva odpustenie hriechov a plnohodnotný život.</p> <p>Nie sme dokonalé spoločenstvo, ale je našou túžbou, prežívať kresťanstvo také, ako je podané v Písme Svätom.</p> ';
            this.main['content'].pages[id].loaded = true;
        }

        // php request
        if (id === 'Kontakt') {
            this.main['content'].pages[id].title = 'Čomu veríme';
            this.main['content'].pages[id].description = '<p style="text-align: justify;"> <strong>Úvod</strong></p><p style="text-align: justify;"> Tieto články sú základňou pre vyjadrenie viery, pre spoluprácu a koordináciu činnosti jednotlivcov, zborov, či kresťanských spoločenstiev. Použitú frazeológiu neprehlasujeme za inšpirovanú. Je ňou vyjadrovaná pravda, ktorú považujeme za nutnú pre našu službu. Predkladaná vierouka vyjadruje biblické pravdy, ktoré sú všeobecne prijímané a považované za základné.</p><p style="text-align: justify;"> <strong>1. Inšpirácia Písma svätého</strong></p><p style="text-align: justify;"> Veríme, že Biblia, pozostávajúca z Písiem Starého a Nového zákona je jediné pravdivé napísané Božie slovo. Písmo sväté je Bohom inšpirované, neomylné a absolútne zvrchované a dostatočné v záležitostiach viery, spasenia a našich životných postojov. Biblia nielenže obsahuje Božie slovo, ale vskutku je kompletným zjavením a Božím slovom inšpirovaným Duchom Svätým. Veriaci kresťania majú dnes duchovné osvietenie, zjavenie ktoré nám dáva schopnosť porozumieť a privlastniť si pravdy Božieho slova.</p><p style="text-align: justify;"> <strong>2. Učenie o Bohu</strong></p><p style="text-align: justify;"> Veríme v jedného pravého a živého Boha Otca, Syna a Ducha Svätého, ktorý je svätý, večný, všadeprítomný, vševediaci, všemohúci, nemenný, suverénny, spravodlivý, prevyšujúci naše zmysly.&nbsp;</p><p style="text-align: justify;"> <strong>Boh Otec</strong><br> Veríme v Boha Otca všemohúceho, prvú Osobu trojjediného Boha, večne jestvujúceho. Stvoriteľa neba i zeme.</p><p style="text-align: justify;"> <strong>Pán Ježiš Kristus</strong><br> Veríme v Pána Ježiša Krista, druhú Osobu trojjediného Boha, večného Syna Božieho vychádzajúceho od Otca, ktorý bol vtelený prostredníctvom Ducha Svätého a narodil sa z Márie, panny, vzal na seba pravú, ale nie padlú ľudskú prirodzenosť, je jedna Osoba vlastniaca dve zjednotené prirodzenosti . ľudskú a Božiu - nezmiešanú, nepremennú, nerozdelenú. Veríme v Jeho bezhriešny život, zázračnú službu, zástupnú výkupnú smrť, telesné vzkriesenie triumfálne nanebovstúpenie, neustále orodovanie za nás a druhý príchod.</p><p style="text-align: justify;"> <strong>Duch Svätý</strong><br> Veríme v Ducha svätého, tretiu Osobu trojjediného Boha, vychádzajúceho od Otca a od Syna, ktorý usviedča a vedie hriešnika k znovuzrodeniu, uisťuje o spasení, posväcuje a zmocňuje veriaceho.</p><p style="text-align: justify;"> <strong>3. Pád človeka</strong></p><p style="text-align: justify;"> Veríme, že človek bol stvorený dobrý a priamy. Avšak dobrovoľné rozhodnutie sa porušiť Božie nariadenie spôsobilo oddelenie od Boha - fyzickú a duchovnú smrť.</p><p style="text-align: justify;"> <strong>4. Spása človeka</strong></p><p style="text-align: justify;"> Veríme, že spasenie je darom Božej milosti založenej výlučne na osobnej viere v Ježiša Krista, ktorý zomrel za naše hriechy, bol pochovaný a vstal z mŕtvych. Odpustenie hriechov bolo zabezpečené prostredníctvom Kristovej preliatej krvi na kríži ktorá zmierila Boha a človeka a vydobyla spasenie pre všetkých, ktorí sa v pokání odvrátia od hriešneho spôsobu života a vo viere príjmu Ježiša Krista ako Pána a Spasiteľa. V Božích očiach je veriacemu v Ježiša Krista odpustené, je ospravedlnený, pred Bohom a suverénnym pôsobením Ducha Svätého prijíma znovuzrodenie. Znovuzrodením nadprirodzene prijíma večný život a stáva sa členom cirkvi Ježiša Krista, ktorá je Jeho telom, Božou rodinou. Bez znovuzrodenia nie je možná spása človeka.</p><p style="text-align: justify;"> <strong>5. Božie uzdravenie</strong></p><p style="text-align: justify;"> Veríme, že Starý a Nový zákon zjavuje Boha, ktorý zázračne uzdravuje. Veríme, že Pán Ježiš v čase svojej pozemskej služby nadprirodzene uzdravoval chorých a táto Jeho služba je stále prítomná, je prejavom jeho súcitu s chorými a prejavom jeho milosti pri napĺňaní našich fyzických potrieb a je zásahom Jeho všemohúcnosti do nášho života, ktorá stále pokračuje prostredníctvom modlitieb, skladania rúk, pomazania olejom v mene Pánovom a darov Duch Svätého. Pri Jeho druhom príchode vykúpenie zahrnie celú našu bytosť.</p><p style="text-align: justify;"> <strong>6. Cirkev a jej poslanie</strong></p><p style="text-align: justify;"> Veríme, že cirkev je Kristovo telo, Boh v nej prebýva prostredníctvom Ducha, je svedectvom prítomnosti Božieho kráľovstva v súčasnom svete a zahŕňa všetkých znovuzrodených.<br> Veríme, že poslaním cirkvi je oslavovať Boha, zvestovať radostnú zvesť o spasení všetkým ľuďom, vychovávať a vzdelávaťveriacich k službe, prejavovať kresťanské milosrdenstvo všetkým trpiacim.</p><p style="text-align: justify;"> <strong>7. Pánove ustanovenie cirkvi</strong></p><p style="text-align: justify;"> Veríme, že všetci, ktorí robili pokánie a uverili, majú sa dať pokrstiť vo vode ponorením. Týmto vyznávajú svetu, že zomreli s Kristom a boli s Ním vzkriesení, aby žili novým životom.&nbsp;<br> Veríme, že Pánova večera je zvestovaním utrpenia a smrti Pána Ježiša Krista a majú mať na nej účasť všetci znovuzrodení veriaci, kým Pán nepríde.</p><p style="text-align: justify;"> <strong>8. Posvätenie</strong></p><p style="text-align: justify;"> Veríme, že posvätenie je činom oddelenia sa od zlého a zasvätenie sa Bohu. Čo do skúsenosti je okamžití a rastúce. Prejavuje sa v živote veriaceho privlastnením si moci Kristovej krvi a vzkrieseného života cez pôsobenie Ducha Svätého Duch Svätý upriamuje pozornosť veriaceho na Krista, vyučuje ho Božím slovom a buduje v ňom Kristov charakter.</p><p style="text-align: justify;"> <strong>9. Krst v Duchu Svätom</strong></p><p style="text-align: justify;"> Veríme, že krst Duchom Svätým je zmocnením veriaceho k životu a k službe pre Krista. Táto skúsenosť je odlišná od znovuzrodenia a nasleduje po ňom. Je zasľúbený všetkým znovuzrodeným. Je prijímaný vierou a je doprevádzaný počiatočným prejavom hovorenia inými jazykmi, tak ako dáva Duch vysloviť sa.</p><p style="text-align: justify;"> <strong>10. Dary Ducha a Kristove dary služby pre cirkev</strong></p><p style="text-align: justify;"> Veríme v pôsobenie deviatich darov milosti Ducha Svätého v súčasnej dobe (1K 12) a v Kristove dary služby (Ef 4, 11-18) k šíreniu evanjelia a ku budovaniu cirkvi.</p><p style="text-align: justify;"> <strong>11. Časy konca</strong></p><p style="text-align: justify;"> Veríme v skorý, osobný príchod nášho Pána Ježiša Krista pred tisícročným kráľovstvom, aby si zhromaždil k sebe svoj ľud. Keďže máme túto blahoslavenú nádej a skutočné, úprimné očakávanie, pretože je On čistý, aj my sa očisťujeme aby sme mohli byť hotoví stretnúť Ho, keď príde.</p></div>';
            this.main['content'].pages[id].loaded = true;
        }

    }

    // link position in the array
    public activateLink(id: string): void {
        // if it wasn't yet loaded
        if (!this.main['content'].pages[id].loaded) {
            // async...
            this.loadContent(id);
            // .then() (ked to bude realny request tak to bude asynchronne)
            this.main['content'].data['title'] = this.main['content'].pages[id].title;
            this.main['content'].data['description'] = this.main['content'].pages[id].description;
        } else {
            this.main['content'].data['title'] = this.main['content'].pages[id].title;
            this.main['content'].data['description'] = this.main['content'].pages[id].description;
        }
        this.main['nav-bar'].active = id;
        this.main['content'].data['active'] = true;
    }

    // clear content (iba  z aktovneho viewka sa vymaze, cele uz ostane ulozene v this.main['content'].pages)
    public emptyPage(): void {
        this.main['content'].data['title'] = '';
        this.main['content'].data['description'] = '';
        this.main['content'].data['active'] = false;
        this.main['nav-bar'].active = [-1, ''];
    }

}
