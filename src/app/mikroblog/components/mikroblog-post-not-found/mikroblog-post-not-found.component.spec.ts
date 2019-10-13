import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MikroblogPostNotFoundComponent } from './mikroblog-post-not-found.component';

describe('MikroblogPostNotFoundComponent', () => {
  let component: MikroblogPostNotFoundComponent;
  let fixture: ComponentFixture<MikroblogPostNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MikroblogPostNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MikroblogPostNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
