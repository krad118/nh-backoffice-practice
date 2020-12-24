import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCreatedComponent } from './book-created.component';

describe('BookCreatedComponent', () => {
  let component: BookCreatedComponent;
  let fixture: ComponentFixture<BookCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
