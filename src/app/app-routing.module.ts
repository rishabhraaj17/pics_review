import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {HomePageComponent} from "./home-page/home-page.component";
import {ResultsPageComponent} from "./results-page/results-page.component";
import {ReviewPageComponent} from "./review-page/review-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {StatComponent} from "./stat/stat.component";

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'review', component: ReviewPageComponent },
  { path: 'results', component: ResultsPageComponent },
  { path: 'statistics', component: StatComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
