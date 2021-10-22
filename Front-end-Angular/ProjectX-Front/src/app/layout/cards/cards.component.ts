import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  numbers: any;
  constructor() {
    this.numbers = Array(7).fill(0); // [0,1,2,3,4]
  }

  ngOnInit(): void {
  }

}
