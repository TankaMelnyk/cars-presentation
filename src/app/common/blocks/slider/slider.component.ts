import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {
  @Input() galleries: any;
  constructor() { }

  ngOnInit() {
  }

}
