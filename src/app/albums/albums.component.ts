import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ParticularsearchService } from '../particularsearch.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {
  http_data:any;
  id : any;
  tag : any = 'albums';

  constructor(private services:ApiserviceService, private searchservice:ParticularsearchService){}

  ngOnInit(){
    this.searchservice.cast.subscribe((id)=>{this.id = id});
     if (this.id == ''){this.complete_http_json();}
     else{this.particular_http_json();}
  }

  complete_http_json(){
    this.services.complete_data(this.tag).subscribe((data)=>{this.display(data);});
  }

  particular_http_json(){
    this.services.particular_data(this.id,this.tag).subscribe((data)=>{this.display(data);});
  }

  display(data: any){
    console.log(data);
    this.http_data = data;
  }
}
