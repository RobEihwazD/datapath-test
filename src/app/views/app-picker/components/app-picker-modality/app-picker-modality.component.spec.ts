import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPickerModalityComponent } from './app-picker-modality.component';

describe('AppPickerModalityComponent', () => {
  let component: AppPickerModalityComponent;
  let fixture: ComponentFixture<AppPickerModalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPickerModalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPickerModalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
