import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent }    from '../kcbb/main.component';
import { SliderComponent }    from '../kcbb/slider/slider.component';
import { NavBarComponent }    from '../kcbb/nav-bar/nav-bar.component';
import { ContentComponent }    from '../kcbb/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
      MainComponent,
      SliderComponent,
      NavBarComponent,
      ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
