import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    HttpClientModule
  ],
  providers: [{  provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,}],
  bootstrap: [AppComponent]
})
export class AppModule { }
