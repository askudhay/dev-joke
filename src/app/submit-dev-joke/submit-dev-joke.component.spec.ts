import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitDevJokeComponent } from './submit-dev-joke.component';

describe('SubmitDevJokeComponent', () => {
  let component: SubmitDevJokeComponent;
  let fixture: ComponentFixture<SubmitDevJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitDevJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitDevJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
