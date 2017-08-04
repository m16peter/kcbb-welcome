import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainComponent } from '../kcbb/main.component';

// components
import { AppRoutingModule, routedComponents } from './app.routing';
import { EventComponent } from '../kcbb/content/dashboard/events/event.component';
import { AnnouncementComponent } from '../kcbb/content/dashboard/announcement/announcement.component';

// blocks
import { SliderComponent } from '../kcbb/blocks/slider/slider.component';
import { HeaderComponent } from '../kcbb/blocks/header/header.component';
import { FooterComponent } from '../kcbb/blocks/footer/footer.component';

// services
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
        HeaderComponent,
        FooterComponent,
        PopupComponent,
        DropdownComponent,
        LinkComponent,
        routedComponents,
        EventComponent,
        AnnouncementComponent
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
