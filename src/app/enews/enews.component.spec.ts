import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnewsComponent } from './enews.component';

describe('EnewsComponent', () => {
  let component: EnewsComponent;
  let fixture: ComponentFixture<EnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
