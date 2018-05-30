import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeRegistrationComponent } from './recipe-registration.component';

describe('RecipeRegistrationComponent', () => {
  let component: RecipeRegistrationComponent;
  let fixture: ComponentFixture<RecipeRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
