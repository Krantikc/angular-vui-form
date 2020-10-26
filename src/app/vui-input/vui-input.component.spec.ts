import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuiInputComponent } from './vui-input.component';

describe('VuiInputComponent', () => {
  let component: VuiInputComponent;
  let fixture: ComponentFixture<VuiInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuiInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
