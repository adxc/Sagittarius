import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgrToolComponent } from './sgr-tool.component';

describe('SgrToolComponent', () => {
  let component: SgrToolComponent;
  let fixture: ComponentFixture<SgrToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgrToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgrToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
