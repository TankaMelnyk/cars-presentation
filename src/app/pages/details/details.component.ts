import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Card, CarsLoaderService} from "../../services/cars-loader.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})

export class DetailsComponent implements OnInit {

  cardId: number;
  card: Card;
  videos: string[];
  details: any;
  galleries: any;

  constructor(private activateRoute: ActivatedRoute,
              private cardLoader: CarsLoaderService) {
    this.cardId = parseInt(  activateRoute.snapshot.params['id'] );
  }

  ngOnInit() {
    this.card = this.cardLoader.getCardInfoById(this.cardId);
    this.videos = this.card.video;
    this.details = this.card.details;
    this.galleries = this.card.gallery;
  }

}
