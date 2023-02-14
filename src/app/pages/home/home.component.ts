import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/commonService/common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cs: CommonService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.cs.getEntitymgr({}).subscribe(res=>{
      
    })
  }

}
