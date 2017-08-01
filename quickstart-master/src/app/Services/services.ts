import { Injectable } from '@angular/core';
import { Http, Headers,Response ,RequestOptions} from '@angular/http';
 import 'rxjs/add/operator/map';
@Injectable() 

export class AdService {
constructor(private _http: Http) { } 
//url:any="http://192.168.3.144:9000";

getCategories() {
    return this._http.get("http://192.168.3.144:9000/categories"). map((response: Response)=>response.json()); 
    
}

postAd(Ad:any) {
        let url = "http://192.168.3.144:9000/postAd"; //Akshay's machine
        let headers = new Headers();
        headers.append('auth-token', '59803bb98562f3fd3b7ca56d');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
     //let jsonReq = {"title": "laptop sale", "name": "Aishu", "category": "Mobile", "description": "intel core 3"};
        console.log(Ad);
        
        return this._http.post(url,Ad, options)
			.map((response: Response)=>response.json());

    }

}