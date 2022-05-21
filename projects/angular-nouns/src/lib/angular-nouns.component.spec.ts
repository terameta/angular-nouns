import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNounsComponent } from './angular-nouns.component';

describe('AngularNounsComponent', () => {
  let component: AngularNounsComponent;
  let fixture: ComponentFixture<AngularNounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularNounsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularNounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
