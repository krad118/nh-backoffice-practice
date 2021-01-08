import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInlineErrorComponent } from './message-inline-error.component';

describe('MessageInlineErrorComponent', () => {
  let component: MessageInlineErrorComponent;
  let fixture: ComponentFixture<MessageInlineErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageInlineErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInlineErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
