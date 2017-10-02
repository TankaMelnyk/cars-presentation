
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

export class CardDetails{
  public carbody: string;
  public transmission: string;
  public topSpeed: number;
  public acceleration: number;
  public consumption: number;
  public allDetails: any[];

  constructor(details: any[]){
    this.allDetails = details;

    for(const item of this.allDetails){
      if(item['propertyName'] === 'Carbody'){
        this.carbody = item['propertyValue'];
      }
      else if(item['propertyName'] === 'Transmission type'){
        this.transmission = item['propertyValue'];
      }
      else if(item['propertyName'] === 'Top speed (km/h)'){
        this.topSpeed = item['propertyValue'];
      }
      else if(item['propertyName'] === 'Acceleration 0-100 km/h (s)'){
        this.acceleration = item['propertyValue'];
      }
      else if(item['propertyName'] === 'Average consumption (l/100km)'){
        this.consumption = item['propertyValue'];
      }
    }
  }
}

export class Card {
  constructor( public id: number,
               public company: string,
               public model: string,
               public price: number,
               public year: number,
               public preview: string,
               public details: CardDetails,
               public gallery: any = [],
               public video: any = []
  ) {}
}

@Injectable()
export class CarsLoaderService {
  private positionStart: number = 0;
  private positionEnd: number = 0;

  private portionSize: number = 9;
  public isDone: boolean = false;
  public isUntouched: boolean = true;

  cards: Card[] = [];

  objectToCard(rawObject: any) {
    return new Card(rawObject.index, rawObject.company, rawObject.model,
      rawObject.price, rawObject.year, rawObject.preview, new CardDetails(rawObject.details), rawObject.gallery, rawObject.video);
  }

  constructor(private http: Http) {
  }

  getAvailableCards(){
    return this.cards;
  }

  readNextPortionFor(viewObject: any){
    let countQuery: string = 'https://api.mlab.com/api/1/databases/cars_db/collections/cars?&c=true&apiKey=w21XpqcL9WD_jws4EQ1D9c5cFKMpU87E';
    let countResponse = this.http.get(countQuery);

    countResponse.subscribe((countData: Response) => {
      if( !this.isDone ) {
        this.positionStart = this.positionEnd;
        this.positionEnd += this.portionSize;

        let portionQuery: string = 'https://api.mlab.com/api/1/databases/cars_db/collections/cars?q={"index" : { $gte: '
          + this.positionStart
          + ', $lt: '
          + this.positionEnd
          + ' } }&apiKey=w21XpqcL9WD_jws4EQ1D9c5cFKMpU87E';

        let portionResponse = this.http.get(portionQuery);

        portionResponse.subscribe((portionData: Response) => {
          let portionObjects = portionData.json();
          for(const object of portionObjects) {
            this.cards.push(this.objectToCard(object));
          }

          this.isUntouched = false;
          this.isDone = (this.positionEnd) >= parseInt(countData.text());

          viewObject.update(this.cards);
        });
      }
    });
  }

  loadCardsAndUpdateView(viewObject: any) {
    this.readNextPortionFor(viewObject);
  }

  getCardInfoById(id: number) {
    let resultCard =  this.cards.find( (card) =>  card.id === id );

    if(resultCard) {
      return resultCard;
    }
    console.error("Not found");
    return undefined;
  }
}
