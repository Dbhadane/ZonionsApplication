import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerestComponent } from './viewerest.component';

describe('ViewerestComponent', () => {
  let component: ViewerestComponent;
  let fixture: ComponentFixture<ViewerestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
