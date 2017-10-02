import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting-select',
  templateUrl: './sorting-select.component.html',
  styleUrls: ['./sorting-select.component.sass']
})

export class SortingSelectComponent implements OnInit {
  selectedValue: string;

  categories = [
    {value: 'price-0', viewValue: 'Price'},
    {value: 'year-1', viewValue: 'Year'},
    {value: 'top speed-3', viewValue: 'Top speed'},
    {value: 'acceleration-4', viewValue: 'Acceleration'},
    {value: 'consumption-5', viewValue: 'Consumption'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
