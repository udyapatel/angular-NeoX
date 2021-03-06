import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  imports:      [
     BrowserModule,
     FormsModule,
    
     
     BrowserAnimationsModule
     ],
  declarations: [ 
     AppComponent,
     HelloComponent,
     HeaderComponent,
     HomeComponent,
     CarouselComponent
   
    
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
