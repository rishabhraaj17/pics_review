import { Component, OnInit } from '@angular/core';
import { CarResult } from "../CarResult";
import { CarResultService } from "../car-result.service";
import {Observable} from "rxjs";
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  cars: Observable<CarResult[]>;
  car: CarResult[];

  constructor(private carResultService: CarResultService, private messageService: MessageService) { }

  ngOnInit() {
    this.cars = this.carResultService.getCarsResult();
    this.cars.subscribe((c: CarResult[]) => {
      this.car = c;
    } );
  }

  deleteSelected(i) {
    this.carResultService.deleteCar(i).subscribe(() => this.carResultService.getCarsResult().subscribe((c: CarResult[]) => {
      this.car = c;}));
    this.messageService.add({severity:'error', summary:'Deleted!', detail:'Review Deleted'});
  }

  onTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
