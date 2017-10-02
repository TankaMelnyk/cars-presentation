import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum FilterType {
  Company = 1,
  Year,
  Carbody,
  Transmission
}

export class FilterDescription{
  constructor(public isApply: boolean, public filterType: FilterType, public filterValue: string){
  }
}

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.sass']
})

export class SidebarComponent implements OnInit {
  @Input() companies: any = [];
  @Input() years: any = [];
  @Input() carbodies: any = [];
  @Input() transmissions: any = [];
  @Output() filterRequested = new EventEmitter<FilterDescription>();


  companyType: FilterType = FilterType.Company;
  yearType: FilterType = FilterType.Year;
  carbodyType: FilterType = FilterType.Carbody;
  transmissionType: FilterType = FilterType.Transmission;

  constructor() { }

  ngOnInit() {
  }

  updateCategories(companies: any[], years: any[], carbodies: any[], transmissions: any[] ) {
    this.companies = companies;
    this.years = years;
    this.carbodies = carbodies;
    this.transmissions = transmissions;
  }

  applyFilter($event: any, type: FilterType, value: string){
    let description = new FilterDescription($event.checked, type, value);
    this.filterRequested.emit(description);
  }

}
