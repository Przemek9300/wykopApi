import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MikroblogListComponent } from './mikroblog-list.component';

describe('MikroblogListComponent', () => {
  let component: MikroblogListComponent;
  let fixture: ComponentFixture<MikroblogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MikroblogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MikroblogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
