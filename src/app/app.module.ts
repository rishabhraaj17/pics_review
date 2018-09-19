import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ChartModule} from 'primeng/chart';

import {DataViewModule} from 'primeng/dataview';

import {CarServiceService} from "./car-service.service";
import {MessageService} from "primeng/api";
import { StatComponent } from './stat/stat.component';
import {CarResultService} from "./car-result.service";
import {StatService} from "./stat.service";


@NgModule({
  declarations: [
    AppComponent,
    ReviewPageComponent,
    ResultsPageComponent,
    HomePageComponent,
    PageNotFoundComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    ChartModule
  ],
  providers: [CarServiceService, MessageService, CarResultService, StatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
