import { Component } from '@angular/core';
import {AdService} from '../../Services/services'
import {Loginservice} from '../../Services/loginservice'
@Component({ 
    selector: 'postAd', 
    templateUrl: `./postAd.html`,
    
 }) 

 export class PostAdcomponent { 
     categories:Array<any>=[{}];
     Advertisements:Array<any>=[];
     counter:number=0;
     constructor(private myAdService:AdService,private loginservice:Loginservice)
     {
      myAdService.getCategories().subscribe((data)=> { this.categories=data.data.itemList;
           //this.categories.push(data);
           console.log('Received products: ', this.categories) });
          
     }
     addAd(titleVal:any,nameVal:any,categoryVal:any,descVal:any)
     {
         var newAd={
            
            "title":titleVal,
            "name":nameVal,
            
            "category":categoryVal,
        "description":descVal

         }
         
         this.loginservice.postAd(newAd).subscribe((data)=>
         {
console.log(data);
         });
        
         
     }

    
  }