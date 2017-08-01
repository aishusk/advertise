import { Component } from '@angular/core';
import {AdService} from './Services/services'

@Component({
  selector: 'my-app',
  template: `<postAd></postAd>`,
  providers:[AdService]
})
export class AppComponent  {

 }
