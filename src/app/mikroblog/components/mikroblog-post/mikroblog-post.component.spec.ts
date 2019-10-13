import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MikroblogPostComponent } from './mikroblog-post.component';

describe('MikroblogPostComponent', () => {
  let component: MikroblogPostComponent;
  let fixture: ComponentFixture<MikroblogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MikroblogPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MikroblogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
