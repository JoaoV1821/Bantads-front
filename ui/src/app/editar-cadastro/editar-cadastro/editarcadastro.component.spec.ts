import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcadastroComponent } from './editarcadastro.component';

describe('EditarcadastroComponent', () => {
  let component: EditarcadastroComponent;
  let fixture: ComponentFixture<EditarcadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarcadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarcadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
