import { Component, OnInit } from '@angular/core';
import {CarModel} from "../CarModel";
import {CarServiceService} from "../car-service.service";
import {Observable} from "rxjs";
import {CarResultService} from "../car-result.service";
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

  cars: Observable<CarModel[]>;
  car: CarModel[];

  constructor(private carService: CarServiceService, private carResultService: CarResultService, private messageService: MessageService) { }

  ngOnInit() {
   this.cars = this.carService.getCars();
   this.cars.subscribe((c: CarModel[]) => {
     this.car = c;
     console.log(this.car)
   } )
  }

  clickCorrect(car: CarModel, correct: boolean) {
    this.messageService.add({severity:'success', summary:'Correct!', detail:'Marked as correct.'});
    this.carResultService.populateResults(car, correct);
    document.getElementById("logStatus").innerHTML = "Reviewed as Correct!";
  }

  clickInCorrect(car: CarModel, correct: boolean) {
    this.messageService.add({severity:'warn', summary:'Inorrect!', detail:'Marked as incorrect.'});
    this.carResultService.populateResults(car, correct);
    document.getElementById("logStatus").innerHTML = "Reviewed as Incorrect!";
  }

  undoThis(i) {
    this.messageService.add({severity:'info', summary:'Undo!', detail:'Changes Reverted! Select your choice again.'});
    this.carResultService.deleteCar(i).subscribe();
    document.getElementById("logStatus").innerHTML = "";
  }

  onTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
