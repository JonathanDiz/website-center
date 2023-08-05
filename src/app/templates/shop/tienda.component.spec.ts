import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TiendaComponent } from './tienda.component';

describe('TiendaComponent', () => {
  let component: TiendaComponent;
  let fixture: ComponentFixture<TiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiendaComponent],
    });

    fixture = TestBed.createComponent(TiendaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // You can add more tests for other behaviors or properties of the component
});
