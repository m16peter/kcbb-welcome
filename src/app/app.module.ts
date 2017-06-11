import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainComponent } from '../kcbb/main.component';
import { AppRoutingModule, routedComponents } from './app.routing';

// blocks
import { SliderComponent } from '../kcbb/blocks/slider/slider.component';
import { NavigationComponent } from '../kcbb/blocks/navigation/navigation.component';
import { FooterComponent } from '../kcbb/blocks/footer/footer.component';
import { HttpService } from '../kcbb/services/http.service';

// modules
import { PopupComponent } from '../kcbb/modules/popup/popup.component';
import { DropdownComponent } from '../kcbb/modules/dropdown/dropdown.component';
import { LinkComponent } from '../kcbb/modules/link/link.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        SliderComponent,
        NavigationComponent,
        FooterComponent,
        PopupComponent,
        DropdownComponent,
        LinkComponent,
        routedComponents
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [ HttpService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
