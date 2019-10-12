import { TestBed } from '@angular/core/testing';

import { WykopService } from './wykop.service';

describe('WykopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WykopService = TestBed.get(WykopService);
    expect(service).toBeTruthy();
  });
});
