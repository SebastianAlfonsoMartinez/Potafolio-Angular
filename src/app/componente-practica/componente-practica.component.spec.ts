import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePracticaComponent } from './componente-practica.component';

describe('ComponentePracticaComponent', () => {
  let component: ComponentePracticaComponent;
  let fixture: ComponentFixture<ComponentePracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentePracticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentePracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
