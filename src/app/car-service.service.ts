import { Injectable } from '@angular/core';
import {CarModel} from "./CarModel";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
export class CarServiceService {

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get<CarModel[]>('http://localhost:3000/cars');
  }

  updateCar (car: CarModel): Observable<CarModel> {
    return this.http.put<CarModel>('http://localhost:3000/cars', car, httpOptions)
      .pipe();
  }
}
