import { Injectable } from '@angular/core';
import { CarResult } from "./CarResult";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CarModel} from "./CarModel";
import {catchError} from "rxjs/operators";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarResultService {

  results: CarResult[] = [];
  result: CarResult;

  constructor(private http: HttpClient) { }

  getCarsResult() {
    return this.http.get<CarResult[]>('http://localhost:3001/carResult');
  }

  populateResults(car: CarModel, correct: boolean) {
    this.result = <CarResult>car;
    this.result.correct = correct;
    //this.results.push(this.result);
    this.addHero(this.result).subscribe(value => this.results.push(value));
    console.log(JSON.stringify(this.result));
  }

  addHero (hero: CarResult): Observable<CarResult> {
    console.log("Sending Post");
    return this.http.post<CarResult>('http://localhost:3001/carResult', JSON.stringify(hero), httpOptions)
      .pipe();
  }

  deleteCar(id: number): Observable<{}> {
    const url = `${'http://localhost:3001/carResult'}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe();
  }

}
