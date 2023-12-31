import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TiendaComponent } from './tienda.component';

describe('TiendaComponent', () => {
  let component: TiendaComponent;
  let fixture: ComponentFixture<TiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiendaComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests for other behaviors or properties of the component
});
