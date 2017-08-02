import { Component } from '@angular/core';
import {AdService} from './Services/services'
import {Loginservice} from './Services/loginservice';
import{Registerservice} from './Services/registerservice'

@Component({
  selector: 'my-app',
  template: `<mynav></mynav>
    <router-outlet></router-outlet>
    <myfooter></myfooter>`,
  providers:[Loginservice,AdService,Registerservice]
})
export class AppComponent  {

 }
