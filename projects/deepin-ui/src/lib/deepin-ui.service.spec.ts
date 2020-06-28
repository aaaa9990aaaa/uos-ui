import { TestBed } from '@angular/core/testing';

import { DeepinUiService } from './deepin-ui.service';

describe('DeepinUiService', () => {
  let service: DeepinUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeepinUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
