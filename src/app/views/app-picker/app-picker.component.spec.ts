import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPickerComponent } from './app-picker.component';

describe('AppPickerComponent', () => {
  let component: AppPickerComponent;
  let fixture: ComponentFixture<AppPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
