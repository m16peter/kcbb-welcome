import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

// kcbb
import { MainComponent } from '../kcbb/main.component';
import { SliderComponent } from '../kcbb/slider/slider.component';
import { NavBarComponent } from '../kcbb/nav-bar/nav-bar.component';
import { HomeComponent } from '../kcbb/home/home.component';
import { ContentComponent } from '../kcbb/content/content.component';
import { FooterComponent } from '../kcbb/footer/footer.component';

// modules
import { PopupComponent } from '../modules/popup/popup.component';
import { HttpService } from '../modules/http/http.service';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        SliderComponent,
        NavBarComponent,
        HomeComponent,
        ContentComponent,
        FooterComponent,
        PopupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule { }
