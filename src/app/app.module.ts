import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { appRouting } from "./app.routing";
import { AlertModule } from 'ngx-bootstrap';
import {CheckboxModule,ChartModule,GalleriaModule,LightboxModule,FieldsetModule} from 'primeng/primeng';
import { MdCardModule } from "@angular/material";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    appRouting,
    ChartModule,
    MdCardModule,
  GalleriaModule,
  LightboxModule,
  FieldsetModule,
    AlertModule.forRoot(),
 
  CheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
