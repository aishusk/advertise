import { Injectable } from '@angular/core';
import { Http, Headers,Response ,RequestOptions} from '@angular/http';

 import 'rxjs/add/operator/map';
@Injectable() 

export class Loginservice {
constructor(private _http: Http) { } 
url:any="http://192.168.3.144:9000/login";
token:any;
username:any;
loginService(user:any) {
    let headers = new Headers();
       

        let options = new RequestOptions({ headers: headers });
     //let jsonReq = {"title": "laptop sale", "name": "Aishu", "category": "Mobile", "description": "intel core 3"};
        console.log();
        
        return this._http.post(this.url,user, options)
			.map((response: Response)=>response.json());
         
    
    
}
sendToken(loginToken:any){
    this.token=loginToken;
    console.log('HERE',this.token)
}
userLogOut(loginToken:any){
        let headers = new Headers();
        headers.append('auth-token', loginToken);
        let options = new RequestOptions({ headers: headers });
        return this._http.delete( "http://192.168.3.144:9000/logout", options).map((response: Response)=>response.json()); 
}

postAd(Ad:any) {
        let url = "http://192.168.3.144:9000/postAd"; //Akshay's machine
        let headers = new Headers();
        headers.append('auth-token', this.token);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
     //let jsonReq = {"title": "laptop sale", "name": "Aishu", "category": "Mobile", "description": "intel core 3"};
        console.log(Ad);
        
        return this._http.post(url,Ad, options)
			.map((response: Response)=>response.json());

    }
searchAd()
{
    
}
setUsername(name:any)
{
    this.username=name;
  
}
getUsername()
{
    
    return this.username;
    
}
settoken(token:any)
{
   this.token=token;
}
gettoken()
{
    return this.token;
    
}
    }

