import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Partie1Service } from '../services/partie1.service';

@Component({
  selector: 'app-partie1',
  templateUrl: './partie1.component.html',
  styleUrls: ['./partie1.component.scss']
})
export class Partie1Component implements OnInit {
  data_q1: any = [];
  date_q1: any = '';

  data_q2: any = [];
  continent: any = '';

  nbContinent: any = 0;
  dtOptions: DataTables.Settings = {};

  dtTriggerQ1: Subject<any> = new Subject();
  dtTriggerQ2: Subject<any> = new Subject();
  

  constructor(private partie1Service: Partie1Service) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7,
      lengthMenu : [7, 25, 50, 75, 100],
      processing: true
    };

    this.getQ3();

  }

  getQ1(){
    console.log(this.date_q1);
    
    this.partie1Service.getQ1(this.date_q1).subscribe(
      data => {
        this.data_q1 = data;
      }
    );
  }

  getQ2(){
    this.partie1Service.getQ2(this.continent).subscribe(
      data => {
        this.data_q2 = data;
        this.dtTriggerQ2.next(this.data_q2);
      }
    );
  }

  async getQ3(){
    this.partie1Service.getQ3().subscribe(
      (data: any) => {
        this.nbContinent = data[0]['number_continent'];
        console.log(data);
      }
    );
  }

}
