import { TestBed } from '@angular/core/testing';

import { EditarcadastroService } from './editarcadastro.service';

describe('EditarcadastroService', () => {
  let service: EditarcadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarcadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
