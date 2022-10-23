import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CreateBookmarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
