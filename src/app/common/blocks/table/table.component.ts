import {Component, OnInit, Input} from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})


export class TableComponent implements OnInit {
  @Input() details: any;

  displayedColumns = ['propertyName', 'propertyValue'];
  dataSource = new ExampleDataSource();
  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.details.allDetails;
  }

}

export interface Element {
  propertyName: any;
  propertyValue: any;
}

export class ExampleDataSource extends DataSource<any> {
  public data: Element[] = [];
  connect(): Observable<Element[]> {
    return Observable.of(this.data);
  }

  disconnect() {}
}
