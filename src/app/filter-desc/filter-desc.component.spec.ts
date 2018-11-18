import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDescComponent } from './filter-desc.component';

describe('FilterDescComponent', () => {
  let component: FilterDescComponent;
  let fixture: ComponentFixture<FilterDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
