import { Component, OnInit, ViewChild } from '@angular/core';
import { CarsLoaderService, CardDetails, Card } from '../../services/cars-loader.service';
import { SidebarComponent, FilterDescription, FilterType } from '../../common/blocks/sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})

export class MainComponent implements OnInit {
  @ViewChild('filterPanel')
  filterPanel: SidebarComponent;
  cards = [];
  allCards = [];
  canLoadMore = true;
  isProcessing = false;
  appliedFilters: FilterDescription[] = [];

  constructor( private cardsService: CarsLoaderService) {  }

  ngOnInit() {
    if( this.cardsService.isUntouched ) {
      this.cardsService.loadCardsAndUpdateView(this);
    }
    else {
      this.update(this.cardsService.getAvailableCards());
    }

  }

  update(cards: any) {
    this.cards = cards.map(x => Object.assign({}, x));
    this.allCards = cards.map(x => Object.assign({}, x));
    this.canLoadMore = !this.cardsService.isDone;
    this.isProcessing = false;

    this.filterPanel.updateCategories(
      this.getUniqueValues( (item) => { return item.company } ),
      this.getUniqueValues( (item) => { return item.year } ),
      this.getUniqueValues( (item) => { return item.details.carbody } ),
      this.getUniqueValues( (item) => { return item.details.transmission } )
    );

    for(const filter of this.appliedFilters){
      this.acceptFilter(filter, false /*needToPersist*/);
    }

  }

  getUniqueValues(propertyGetter: any) {
    let result = new Set();
    for(const item of this.cards) {
      result.add(propertyGetter(item));
    }
    return Array.from(result);
  }

  loadMoreCards() {
    this.isProcessing = true;
    this.cardsService.loadCardsAndUpdateView(this);
  }

  removeFilterFromStorage(filter: FilterDescription){
    let foundFilter = this.appliedFilters.find((item) => {
      return (item.filterType === filter.filterType) && (item.filterValue === filter.filterValue) });
    let filterIndex = this.appliedFilters.indexOf(foundFilter);
    this.appliedFilters.splice(filterIndex, 1);
  }

  addFilterToStorage(filter: FilterDescription){
    this.appliedFilters.push(filter);
  }

  processFilter(filter: FilterDescription, needToPersist: boolean, propertyGetter: any){
    if(filter.isApply) {
      if( needToPersist ) {
        this.addFilterToStorage(filter);
      }
      let other = this.allCards.filter((card) => { return propertyGetter(card) === filter.filterValue });
      this.cards = this.cards.concat(other);
    }
    else{
      if( needToPersist ) {
        this.removeFilterFromStorage(filter);
      }
      this.cards = this.cards.filter((card) => { return propertyGetter(card) !== filter.filterValue });
    }
  }

  acceptFilter(filter: FilterDescription, needToPersist: boolean = true) {
    switch (filter.filterType) {
      case FilterType.Company: {
        this.processFilter(filter, needToPersist, (card) => { return card.company; });
        break;
      }
      case FilterType.Year: {
        this.processFilter(filter, needToPersist, (card) => { return card.year; });
        break;
      }
      case FilterType.Carbody: {
        this.processFilter(filter, needToPersist, (card) => { return card.details.carbody; });
        break;
      }
      case FilterType.Transmission: {
        this.processFilter(filter, needToPersist, (card) => { return card.details.transmission; });
        break;
      }
    }
  }
}
