import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';
import { CommonService } from 'src/app/services/commonService/common-service.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  genders = [];
  genders_b = [];
  bloodGroup = [];
  bloodGroup_b = [];

  constructor(private cs: CommonService, public messageService: MessageService, private snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.getData();
  }

  onGenderChange(event) {
    const value = event.target.value;
    if (value) {
      this.genders = this.genders_b.filter(item => item && item.toLowerCase().indexOf(value.toLowerCase()) > -1)
    }
    else {
      this.genders = JSON.parse(JSON.stringify(this.genders_b))
    }
  }

  onBloodChange(event) {
    const value = event.target.value;
    if (value) {
      this.bloodGroup = this.bloodGroup_b.filter(item => item && item.toLowerCase().indexOf(value.toLowerCase()) > -1)
    }
    else {
      this.bloodGroup = JSON.parse(JSON.stringify(this.bloodGroup_b))
    }
  }

  getData(): void {
    this.cs.getEntitymgr().subscribe((res: any) => {
      this.snackbar.errorSnack('Data Fetched Successfully');
      const data = JSON.parse(res);
      this.genders = data?.ManikJSon[0]?.JSon0.map(i => i.DataText);
      this.genders_b = [...this.genders];
      this.bloodGroup = data?.ManikJSon[0]?.JSon1.map(i => i.DataText);
      this.bloodGroup_b = [...this.bloodGroup];
    }, e => {
      this.snackbar.errorSnack('Something went wrong. Please try later.');
    })
  }

}
