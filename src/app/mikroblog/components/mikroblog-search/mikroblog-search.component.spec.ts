import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MikroblogSearchComponent } from './mikroblog-search.component';

describe('MikroblogSearchComponent', () => {
  let component: MikroblogSearchComponent;
  let fixture: ComponentFixture<MikroblogSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MikroblogSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MikroblogSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
