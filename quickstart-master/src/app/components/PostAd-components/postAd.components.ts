import { Component } from '@angular/core';
import {AdService} from '../../Services/services'

@Component({ 
    selector: 'postAd', 
    templateUrl: `./postAd.html`,
    
 }) 

 export class PostAdcomponent { 
     categories:Array<any>=[{}];
     Advertisements:Array<any>=[];
     counter:number=0;
     constructor(private myAdService:AdService)
     {
      myAdService.getCategories().subscribe((data)=> { this.categories=data.data.itemList;
           //this.categories.push(data);
           console.log('Received products: ', this.categories) });
          
     }
     addAd(titleVal:any,nameVal:any,categoryVal:any,descVal:any)
     {
         var newAd={
             id:this.counter,
            title:titleVal,
            name:nameVal,
            category:categoryVal,
            desc:descVal

         }
         this.counter++;
         this.myAdService.postAd(newAd);
         console.log("addAd",newAd)
         
         
     }

    
  }