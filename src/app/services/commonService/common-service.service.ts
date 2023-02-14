import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  generateJWTToken() {
    return this.http.get('http://entityserver.manikworks.com/apptoken');
  }

  getEntitymgr() {
    const headers = new HttpHeaders()
      .set('LGContext', 'ERRORLOG')
      .set('Context', 'PRACTICE')
      .set('EntityActionType', 'GET.FORM.DATA')
      .set('PortalContext', 'INSTACITI')
    return this.http.post('http://entityserver.manikworks.com/entitymgr', {}, { 'headers': headers });
  }
}
