import {Component, OnInit, Input} from '@angular/core';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { Card } from "../../../services/cars-loader.service";


@NgModule({
  imports: [MatCardModule]
})

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

}
