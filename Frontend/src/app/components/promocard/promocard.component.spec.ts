import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocardComponent } from './promocard.component';

describe('PromocardComponent', () => {
  let component: PromocardComponent;
  let fixture: ComponentFixture<PromocardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromocardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
