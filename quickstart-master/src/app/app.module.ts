import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import{Registerservice} from './Services/registerservice'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AdService} from './Services/services'
import {Loginservice} from './Services/loginservice'
import {Homecomponent} from './components/home-component/home.component'
import {Navcomponent} from './components/nav-component/nav.component'
import {Footercomponent} from './components/footer-component/footer.component'
import {Registercomponent} from './components/register-component/register.component'
import{PostAdcomponent} from './components/PostAd-components/postAd.components'

@NgModule({
  imports:      [ BrowserModule,HttpModule ,FormsModule ,
  RouterModule.forRoot([ {path: '', component: Homecomponent},
   {path: 'register', component:Registercomponent },
   {path: 'postAd', component:PostAdcomponent }
    ])
 ],
  declarations: [ AppComponent,Homecomponent,Navcomponent,Footercomponent,Registercomponent,PostAdcomponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
