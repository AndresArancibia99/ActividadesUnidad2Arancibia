import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapdirectComponent } from './bootstrapdirect.component';

describe('BootstrapdirectComponent', () => {
  let component: BootstrapdirectComponent;
  let fixture: ComponentFixture<BootstrapdirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapdirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapdirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
