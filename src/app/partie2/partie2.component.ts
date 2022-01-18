import { Component, OnInit } from '@angular/core';
import { Partie2Service } from '../services/partie2.service';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-partie2',
  templateUrl: './partie2.component.html',
  styleUrls: ['./partie2.component.scss']
})
export class Partie2Component implements OnInit {

  dataQ1: any = [];
  dataQ2: any = [];
  dataQ3: any = [];
  dateQ3: any = '2022-01-11';

  isoCodeQ1: any = '';
  startedDateQ1: any = '';
  endedDateQ1: any = '';

  isoCodeQ2: any = '';
  startedDateQ2: any = '';
  endedDateQ2: any = '';
  
  months: any = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  dataQ4: any = [];
  locationQ4: any = '';

  nbContinent: any = 0;

  dtOptions: DataTables.Settings = {};
  
  public barChartOptions: ChartOptions = {responsive: true};
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartLabelsQ1: any = [];
  public barChartLabelsQ2: any = [];

  public barChartDataQ1: ChartDataset[] = [];
  public barChartDataQ2: ChartDataset[] = [];

  constructor(private partie2Service: Partie2Service) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu : [10, 25, 50, 75, 100],
      processing: true
    };

    // this.getQ1();
    // this.getQ2();
  }

  getQ1(){
    console.log()
    this.partie2Service.getQ1(this.isoCodeQ1, this.startedDateQ1, this.endedDateQ1).subscribe(
      (data: any) => {
        data.forEach((d: any) => d.date = new Date(d.date));
        
        // this gives an object with dates as keys
        const groups = data.reduce((groups: any, game: any) => {
          const month = game.date.getMonth();
          if (!groups[month]) {
            groups[month] = [];
          }
          groups[month].push(game);
          return groups;
        }, {});
        
        // Edit: to add it in the array format instead
        const groupArrays = Object.keys(groups).map((month) => {
          let totalCases = 0;
          groups[month].forEach((d: any) => totalCases += parseFloat(d.total_cases));
          return {
            month,
            totalCases
          };
        });

        let barChartData: any[] = [];

        groupArrays.forEach((d) => barChartData.push(d.totalCases));

        this.barChartLabelsQ1 = [];

        groupArrays.forEach((d) => this.barChartLabelsQ1.push(this.months[d.month]));

        this.barChartDataQ1 = [
          { data: barChartData, label: 'Total cases per month' }
        ];
      
      }
    )
  }

  getQ2(){
    this.partie2Service.getQ2(this.isoCodeQ2, this.startedDateQ2, this.endedDateQ2).subscribe(
      (data: any) => {
        data.forEach((d: any) => d.date = new Date(d.date));
        
        // this gives an object with dates as keys
        const groups = data.reduce((groups: any, game: any) => {
          const month = game.date.getMonth();
          if (!groups[month]) {
            groups[month] = [];
          }
          groups[month].push(game);
          return groups;
        }, {});
        
        // Edit: to add it in the array format instead
        const groupArrays = Object.keys(groups).map((month) => {
          let totalNewDeaths = 0;
          groups[month].forEach((d: any) => totalNewDeaths += parseFloat(d.new_deaths));
          return {
            month,
            totalNewDeaths
          };
        });

        let barChartData: any[] = [];

        groupArrays.forEach((d) => barChartData.push(d.totalNewDeaths));
        
        this.barChartLabelsQ2 = [];

        groupArrays.forEach((d) => this.barChartLabelsQ2.push(this.months[d.month]));

        this.barChartDataQ2 = [
          { data: barChartData, label: 'Total new deaths per month' }
        ];
      
      }
    )
  }

  getQ3(){
    this.partie2Service.getQ3(this.dateQ3).subscribe(
      data => {
        this.dataQ3 = data;
      }
    );
  }

  getQ4(){
    this.partie2Service.getQ4(this.locationQ4).subscribe(
      data => {
        this.dataQ4 = data;
      }
    );
  }

}
