import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDbComponent } from './update-db.component';

describe('UpdateDbComponent', () => {
  let component: UpdateDbComponent;
  let fixture: ComponentFixture<UpdateDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
