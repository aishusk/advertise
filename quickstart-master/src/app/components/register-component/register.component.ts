import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{Registerservice} from '../../Services/registerservice'
@Component({ 
    selector: 'register', 
    templateUrl: `./register.html`,
    
 }) 
 export class Registercomponent {
     storedata:any;
    constructor(private router: Router,private  registerservice:Registerservice)
     {
     
     }
register(fname:any,lname:any,uname:any,password:any,email:any,phone:any)
{
     var user={
    firstName:fname,
    lastName:lname,
    userName:uname,
    password:password,
    email:email,
    phone:phone

  }
  console.log(user);
this.registerservice.registerService(user).subscribe((response:any)=>
{
this.storedata=response;
console.log("recievd data",this.storedata.data.message);
if(this.storedata.data.message=="Registration successful")
{
     alert("REGISTRATION SUCCESSFUL");
   this.router.navigate(['']); 

}
}
);
    
  }
 }