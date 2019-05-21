import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeleteModalityComponent } from './app-delete-modality.component';

describe('AppDeleteModalityComponent', () => {
  let component: AppDeleteModalityComponent;
  let fixture: ComponentFixture<AppDeleteModalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDeleteModalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDeleteModalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
