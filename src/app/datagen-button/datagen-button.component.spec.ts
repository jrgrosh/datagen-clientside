import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagenButtonComponent } from './datagen-button.component';

describe('DatagenButtonComponent', () => {
  let component: DatagenButtonComponent;
  let fixture: ComponentFixture<DatagenButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagenButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
