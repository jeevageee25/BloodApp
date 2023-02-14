import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private jwt:JwtHelperService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `${localStorage.getItem('dfarm_token')}`
      },
    });

    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
          return event.clone({ body: this.modifyBody(event.body) });
      }
      return event;
  }));
  }

  private modifyBody(body: any) {
   return body
  }
}
