import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonasApiComponent } from './personas-api-component';

describe('PersonasApiComponent', () => {
  let component: PersonasApiComponent;
  let fixture: ComponentFixture<PersonasApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonasApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonasApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
