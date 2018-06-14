import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgrNavListComponent } from './sgr-nav-list.component';

describe('SgrNavListComponent', () => {
  let component: SgrNavListComponent;
  let fixture: ComponentFixture<SgrNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgrNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgrNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
