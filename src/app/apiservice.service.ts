import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  [x: string]: any;
  particular_id : any;
  constructor(private http:HttpClient){}

  particular_data(particular_id: any, tag:any){
    return this.http.get("https://jsonplaceholder.typicode.com/" + tag + "?id=" + particular_id);
  }

    complete_data(tag:any){
    return this.http.get("https://jsonplaceholder.typicode.com/" + tag)
  }
}
