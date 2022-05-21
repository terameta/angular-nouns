import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNounComponent } from './ng-noun.component';

describe('NgNounComponent', () => {
  let component: NgNounComponent;
  let fixture: ComponentFixture<NgNounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgNounComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgNounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
