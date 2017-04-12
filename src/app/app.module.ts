import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from '../kcbb/main.component';
import { AppRoutingModule, routedComponents } from './app.routing';
import { HttpService } from '../kcbb/http.service';
import { SliderComponent } from '../kcbb/blocks/slider/slider.component';
import { NavigationComponent } from '../kcbb/navigation/navigation.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        SliderComponent,
        NavigationComponent,
        routedComponents
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        JsonpModule
    ],
    providers: [ HttpService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
