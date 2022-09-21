import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdashboardComponent } from './searchdashboard.component';

describe('SearchdashboardComponent', () => {
  let component: SearchdashboardComponent;
  let fixture: ComponentFixture<SearchdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
