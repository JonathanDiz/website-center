import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductListComponent } from './product-list.component';
import { ProductService } from 'src/app/services/product-service.service';
import { Product } from '../product.interface';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let mockProductService: any;

  const mockProducts: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      description: 'Description 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.99,
      description: 'Description 2',
    },
  ];

  beforeEach(() => {
    mockProductService = jasmine.createSpyObj('ProductService', ['getProducts']);
    mockProductService.getProducts.and.returnValue(of(mockProducts));

    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [
        { provide: ProductService, useValue: mockProductService },
      ],
    });

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products on init', () => {
    component.ngOnInit();
    expect(component.products).toEqual(mockProducts);
  });

  // You can add more tests for other behaviors of the component
});
