import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {SkeletonLoadingComponent} from './components/skeleton-loading/skeleton-loading.component';
import {CookiesComponent} from './components/cookies/features/cookies/cookies.component';
import {ParallaxScrollingComponent} from './components/parallax-scrolling/parallax-scrolling.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: AppComponent },
  { path: 'skeletonLoading',  component: SkeletonLoadingComponent },
  { path: 'cookies',  component: CookiesComponent },
  { path: 'parallaxScrolling',  component: ParallaxScrollingComponent },
  { path: '**', component: AppComponent } // If no matching route found. Or you can navigate to the 404 error page.
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
