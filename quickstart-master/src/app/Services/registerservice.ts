import { Injectable } from '@angular/core';
import { Http, Headers,Response ,RequestOptions} from '@angular/http';
 import 'rxjs/add/operator/map';
@Injectable() 

export class Registerservice {
constructor(private _http: Http) { } 
url:any="http://192.168.3.144:9000/register";

registerService(user:any) {
    let headers = new Headers();
        

        let options = new RequestOptions({ headers: headers });
     //let jsonReq = {"title": "laptop sale", "name": "Aishu", "category": "Mobile", "description": "intel core 3"};
        console.log("register done");
        
        return this._http.post(this.url,(user),  options)
			.map((response: Response)=>response.json());
    
}


    }
