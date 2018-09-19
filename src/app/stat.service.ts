import { Injectable } from '@angular/core';
import { CarResult } from "./CarResult";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CarModel} from "./CarModel";
import {Observable} from "rxjs";
import {CarResultService} from "./car-result.service";
import {CarServiceService} from "./car-service.service";

@Injectable({
  providedIn: 'root'
})
export class StatService {

  cars: Observable<CarModel[]>;
  car: CarModel[];

  carsRes: Observable<CarResult[]>;
  carRes: CarResult[];
  correct: number;
  inCorrect: number;
  unknown: number;


  constructor(private http: HttpClient, private carResultService: CarResultService, private carService: CarServiceService) {
    this.correct = 0;
    this.inCorrect = 0;
    this.unknown = 0;
  }

  getData() {
    this.cars = this.carService.getCars();
    this.cars.subscribe((c: CarModel[]) => {
      this.car = c;
    } );

    this.carsRes = this.carResultService.getCarsResult();
    this.carsRes.subscribe((c: CarResult[]) => {
      this.carRes = c;
    } );
  }

  calculateCorrectIncorrect() {
    console.log(this.carRes);
    this.carRes.forEach(value => {
      if (value.correct == true) {
        this.correct++;
      } else {
        this.inCorrect++;
      }
    });
  }

  calculateUnknown() {
    this.unknown = this.car.length - (this.correct + this.inCorrect);
  }

}
