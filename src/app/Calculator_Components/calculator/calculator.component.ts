import { SharedDataService } from './../../services/shared-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  compSelector:number;
  constructor(private data_service:SharedDataService) { }

  ngOnInit() {    
    this.data_service.state.subscribe((state:number) => {
      this.compSelector = state;
    });
  }

}
