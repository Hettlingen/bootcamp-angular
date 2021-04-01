import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonLoadingComponent } from './components/skeleton-loading/skeleton-loading.component';
import { CookiesComponent } from './components/cookies/features/cookies/cookies.component';
import {CookiesService} from './components/cookies/services/cookies.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonLoadingComponent,
    CookiesComponent
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
