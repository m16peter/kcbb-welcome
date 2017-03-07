import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// services
import { HttpService } from '../modules/http/http.service';

// components
import { AppComponent } from './app.component';
import { MainComponent } from '../kcbb/main.component';
import { SliderComponent } from '../kcbb/slider/slider.component';
import { NavBarComponent } from '../kcbb/nav-bar/nav-bar.component';
import { ContentComponent } from '../kcbb/content/content.component';
import { FooterComponent } from '../kcbb/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        SliderComponent,
        NavBarComponent,
        ContentComponent,
        FooterComponent
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
