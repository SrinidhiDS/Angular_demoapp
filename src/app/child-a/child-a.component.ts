import { Component, Input } from '@angular/core';
import data from '../data.json';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../apiservice.service';
import { ParticularsearchService } from '../particularsearch.service';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent {
// list:{firstName:string,lastName:string,role:string,fb:string,linkedIn:string,twitter:string}[] = data
@Input() input:any = ''; 
showfirst : boolean =true;
http_data:any;
id : any;
tag: any = 'users';

constructor(private services:ApiserviceService, public searchservice:ParticularsearchService){}
ngOnInit(){
  this.searchservice.cast.subscribe((id)=>{this.id = id});
   if (this.id == ''){this.services.complete_data(this.tag).subscribe((data)=>{this.http_data = data;});}
   else{this.services.particular_data(this.id,this.tag).subscribe((data)=>{this.http_data = data;});}
}

// particular_http_json(){
//   this.services.particular_data(this.id,this.tag).subscribe((data)=>{this.display(data);});
// }

// complete_http_json(){
//   this.services.complete_data(this.tag).subscribe((data)=>{this.display(data);});
// }

// display(data: any){
//   console.log(data);
//   this.http_data = data;
// }

}
