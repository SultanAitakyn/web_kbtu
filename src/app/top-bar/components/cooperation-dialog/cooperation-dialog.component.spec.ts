import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperationDialogComponent } from './cooperation-dialog.component';

describe('CooperationDialogComponent', () => {
  let component: CooperationDialogComponent;
  let fixture: ComponentFixture<CooperationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
