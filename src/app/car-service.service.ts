import { Injectable } from '@angular/core';
import {CarModel} from "./CarModel";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get<CarModel[]>('http://localhost:3000/cars');
  }
}
