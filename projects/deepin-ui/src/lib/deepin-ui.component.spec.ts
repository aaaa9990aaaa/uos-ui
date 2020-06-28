import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepinUiComponent } from './deepin-ui.component';

describe('DeepinUiComponent', () => {
  let component: DeepinUiComponent;
  let fixture: ComponentFixture<DeepinUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepinUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepinUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
