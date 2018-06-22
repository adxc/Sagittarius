import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgrNewsComponent } from './sgr-news.component';

describe('SgrNewsComponent', () => {
  let component: SgrNewsComponent;
  let fixture: ComponentFixture<SgrNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgrNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgrNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
