import { Component, OnInit } from '@angular/core';
import { CarResult } from "../CarResult";
import { CarResultService } from "../car-result.service";
import {Observable} from "rxjs";
import {CarModel} from "../CarModel";

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  cars: Observable<CarResult[]>;
  car: CarResult[];

  constructor(private carResultService: CarResultService) { }

  ngOnInit() {
    this.cars = this.carResultService.getCarsResult();
    this.cars.subscribe((c: CarResult[]) => {
      this.car = c;
      console.log(this.car)
    } );
  }

  deleteSelected(i) {
    this.carResultService.deleteCar(i).subscribe(() => this.carResultService.getCarsResult().subscribe((c: CarResult[]) => {
      this.car = c;}));
  }

}
