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


}