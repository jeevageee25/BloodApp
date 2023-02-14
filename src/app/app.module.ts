import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MessagesModule } from 'primeng/messages'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptors';
import { HomeComponent } from './pages/home/home.component';
import { ToastModule } from 'primeng-lts/toast';
import { MessageService } from 'primeng-lts/api';
import { DropdownModule } from 'primeng-lts/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServicesModule,
    HttpClientModule,
    ToastModule,
    MessagesModule,
    DropdownModule
  ],
  providers: [MessageService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
