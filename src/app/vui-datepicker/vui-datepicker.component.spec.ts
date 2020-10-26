import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuiDatepickerComponent } from './vui-datepicker.component';

describe('VuiDatepickerComponent', () => {
  let component: VuiDatepickerComponent;
  let fixture: ComponentFixture<VuiDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuiDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuiDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
