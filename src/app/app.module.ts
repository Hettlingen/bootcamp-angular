import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SkeletonLoadingComponent} from './components/skeleton-loading/skeleton-loading.component';
import {CookiesComponent} from './components/cookies/features/cookies/cookies.component';
import {CookiesService} from './components/cookies/services/cookies.service';
import { ParallaxScrollingComponent } from './components/parallax-scrolling/parallax-scrolling.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonLoadingComponent,
    CookiesComponent,
    ParallaxScrollingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CookiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
