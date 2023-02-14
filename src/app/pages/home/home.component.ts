import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';
import { CommonService } from 'src/app/services/commonService/common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  genders = [];
  bloodGroup = [];

  constructor(private cs: CommonService, public messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    this.getData();
 
  }

  getData(): void {
    this.cs.getEntitymgr().subscribe((res:any)=>{
      const data = JSON.parse(res);
      this.genders = data?.ManikJSon[0]?.JSon0
      this.bloodGroup = data?.ManikJSon[0]?.JSon1
    })
  }

}
