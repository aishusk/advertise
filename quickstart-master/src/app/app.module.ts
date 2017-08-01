import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import{PostAdcomponent} from './components/PostAd-components/postAd.components';
import {AdService} from './Services/services'
@NgModule({
  imports:      [ BrowserModule,HttpModule  ],
  declarations: [ AppComponent ,PostAdcomponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
