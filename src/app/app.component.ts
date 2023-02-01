import { Component, Input, Output} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from './apiservice.service';
import { ParticularsearchService } from './particularsearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task_2';
  showfirst : boolean =true;

  constructor(private searchservice:ParticularsearchService, private route:Router){}

  changesearch_id(user_id : any){
    this.searchservice.updatevalue(user_id);
  }
  
  ngOnDestroy(){}
  // particular_id :any;
  // showfirst : boolean =true;
  
  // http_data:any;

  //constructor(private services:ApiserviceService){}
  
  // ngOnInit(data:any){
  //   this.val = data;
  // }
  //   if (this.val== ''){this.complete_http_json();}
  //   else{
  //   this.particular_http_json();}
  //  }

  //   particular_http_json(){
  //     this.services.particulargetdata(this.val).subscribe((data)=>{this.display(data);});
  //   }

  //   complete_http_json(){
  //     this.services.completegetdata().subscribe((data)=>{this.display(data);});
  //     this.showfirst = !this.showfirst;
  //   }
    
  //   display(data: any){
  //   console.log(data);
  //   this.http_data = data;
  // }
 
  // profile(){
  //   this.showfirst = !this.showfirst;
  // }
}
