import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticularsearchService {

  constructor() {}
  private search_idSubject = new BehaviorSubject<string>('');
  cast = this.search_idSubject.asObservable();

  updatevalue(val:string){
    this.search_idSubject.next(val);
  }
}
