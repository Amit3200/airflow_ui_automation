import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { map, take } from 'rxjs/operators';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetNamesDbService {
  api_address:string='https://api.myjson.com/bins/e7r0z';
  constructor(private http:Http) { }
  getDbNames() {
    return this.http.get(this.api_address);
  }
}
