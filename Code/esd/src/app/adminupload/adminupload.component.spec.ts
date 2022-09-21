import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuploadComponent } from './adminupload.component';

describe('AdminuploadComponent', () => {
  let component: AdminuploadComponent;
  let fixture: ComponentFixture<AdminuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
