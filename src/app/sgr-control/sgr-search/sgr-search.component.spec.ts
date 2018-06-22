import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgrSearchComponent } from './sgr-search.component';

describe('SgrSearchComponent', () => {
  let component: SgrSearchComponent;
  let fixture: ComponentFixture<SgrSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgrSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgrSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
