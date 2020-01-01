import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgrTerminalComponent } from './sgr-terminal.component';

describe('SgrTerminalComponent', () => {
  let component: SgrTerminalComponent;
  let fixture: ComponentFixture<SgrTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgrTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgrTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
