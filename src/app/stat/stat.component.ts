import { Component, OnInit } from '@angular/core';
import {StatService} from "../stat.service";

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  data: any;

  constructor(private statService: StatService) {
    this.populateChart();
  }

  ngOnInit() {

  }

  populateChart() {
    this.data = {
      labels: ['Reviewed Correct','Reviewed Incorrect','Not Yet Reviewed'],
      datasets: [
        {
          data: [20, 10, 5],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }

}
