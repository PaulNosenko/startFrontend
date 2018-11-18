import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredAscComponent } from './filtered-asc.component';

describe('FilteredAscComponent', () => {
  let component: FilteredAscComponent;
  let fixture: ComponentFixture<FilteredAscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredAscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredAscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
