import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/commonService/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bloodApp';

  constructor(private cs: CommonService) { }

  ngOnInit(): void {
    this.getJWTToken();
  }

  getJWTToken(): void {
    this.cs.generateJWTToken().subscribe(res => {
      console.log('TOKEN::', res);
      localStorage.setItem('token',JSON.stringify(res))

    })
  }
}
