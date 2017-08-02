import { Component } from '@angular/core';
import {Loginservice} from '../../Services/loginservice'
import { Router } from '@angular/router';
@Component({ 
    selector: 'home', 
    templateUrl: `./home.html`,
    
 }) 

 export class Homecomponent { 
   username:any;

 constructor(private router: Router,private loginservice:Loginservice)
     {
     
     }
login(name:any,passwd:any)
{
  var user={
    userName:name,
    password:passwd
  }
  this.loginservice.loginService(user).subscribe((response)=>
  { var token=response.data['auth-token'];
  this.username=response.data['userId'];
 this.loginservice.setUsername(name);
 this.loginservice.settoken(token);
  console.log("login done",token)
    console.log("login done",this.username);
  this.router.navigate(['']); 

}
);
    
  }
 }