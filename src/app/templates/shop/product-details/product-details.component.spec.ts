import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { throwError, of } from 'rxjs'; // Import throwError
import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from 'src/app/services/product-service.service';
import { Product } from '../product.interface';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let mockActivatedRoute: any;
  let mockProductService: any;

  const mockProduct: Product = {
    id: 1,
    name: 'Mock Product',
    price: 10.99,
    description: 'This is a mock product.',
  };

  beforeEach(() => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: (key: string) => '1',
        },
      },
    };

    mockProductService = jasmine.createSpyObj('ProductService', ['getProductById']);
    mockProductService.getProductById.and.returnValue(of(mockProduct)); // Use of() to create a successful observable

    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ProductService, useValue: mockProductService },
      ],
    });

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch product details on init', () => {
    component.ngOnInit();
    expect(component.product).toEqual(mockProduct);
  });

  it('should handle error when fetching product details', () => {
    const error = 'Mock error';
    mockProductService.getProductById.and.returnValue(throwError(error)); // Use throwError

    spyOn(console, 'error'); // Spy on the console.error method

    component.ngOnInit();
    expect(console.error).toHaveBeenCalledWith('Error fetching product details:', error);
  });

  // You can add more tests for other methods or behaviors of the component
});
