import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCarousel } from './modal-carousel';

describe('ModalCarousel', () => {
  let component: ModalCarousel;
  let fixture: ComponentFixture<ModalCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
