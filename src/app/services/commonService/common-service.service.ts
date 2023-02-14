import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  generateJWTToken(){
    return this.http.get('http://entityserver.manikworks.com/apptoken');
  }

  getEntitymgr(payload:any){
    return this.http.post('http://entityserver.manikworks.com/entitymgr', payload);
  } 
}
