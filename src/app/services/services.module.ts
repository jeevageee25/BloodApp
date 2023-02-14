import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtOperationService } from './jwtService/jwt-operation-service.service';
import { CommonService } from './commonService/common-service.service';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

export function jwtOptionsFactory(tokenService) {
  return {
    tokenGetter: () => {
      return tokenService.getAsyncToken();
    },
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    })
  ],
  providers: [JwtOperationService, CommonService, JwtHelperService]
})
export class ServicesModule { }
