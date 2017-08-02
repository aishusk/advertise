import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AdService} from '../../Services/services'
import {Loginservice} from '../../Services/loginservice'
@Component({ 
    selector: 'mynav', 
    templateUrl: `./mynav.html`,
    
 }) 

 export class Navcomponent { 
   actions:any;
    token:any;
tokenlogout:any;
 name:any;
 public flag:number=0;
   categories:Array<any>=[{}];
   
 constructor(private router: Router,private myAdService:AdService,private loginservice:Loginservice) {
    myAdService.getCategories().subscribe((data)=> { this.categories=data.data.itemList;
           //this.categories.push(data);
           console.log('Received products: ', this.categories) });
           
 }

ngDoCheck()
{
  this.token=this.loginservice.gettoken();
 this.name =this.loginservice.getUsername();
 if(this.token!=null)
 {
   this.flag=1;
 }
 
}
logoutUser(){
  console.log("LOG OUT USER COMPONENT")
  this.tokenlogout=this.token;
  this.token=null;
  this.loginservice.userLogOut(this.tokenlogout).subscribe((response)=>{
  },
  (error)=>{});
  this.loginservice.sendToken(null);
  this.flag=0;
  this.router.navigate(['/home'])

}

  }