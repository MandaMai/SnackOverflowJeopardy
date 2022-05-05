import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JessicaPointsComponent } from './jessica-points.component';

describe('JessicaPointsComponent', () => {
  let component: JessicaPointsComponent;
  let fixture: ComponentFixture<JessicaPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JessicaPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JessicaPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
