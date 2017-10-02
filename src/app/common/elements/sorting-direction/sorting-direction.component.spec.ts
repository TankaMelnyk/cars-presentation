import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingDirectionComponent } from './sorting-direction.component';

describe('SortingDirectionComponent', () => {
  let component: SortingDirectionComponent;
  let fixture: ComponentFixture<SortingDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
