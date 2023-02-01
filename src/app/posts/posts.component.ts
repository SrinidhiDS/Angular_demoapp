import { Component, Input } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ParticularsearchService } from '../particularsearch.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  title = "srinidhi"
  http_data : any;  
  id : any;
  tag : any = 'posts';

  constructor(private services:ApiserviceService, private searchservice:ParticularsearchService){}

  ngOnInit(){
    this.searchservice.cast.subscribe((id)=>{this.id = id});
     if (this.id == ''){this.services.complete_data(this.tag).subscribe((data)=>{this.http_data = data;});}
     else{this.services.particular_data(this.id,this.tag).subscribe((data)=>{this.http_data = data;});}
  }

  // complete_http_json(){
  //   this.services.complete_data(this.tag).subscribe((data)=>{this.display(data);});
  // }

  // particular_http_json(){
  //   this.services.particular_data(this.id,this.tag).subscribe((data)=>{this.display(data);});
  // }

  // display(data: any){
  // console.log(data);
  // this.http_data = data;
  // }
}
