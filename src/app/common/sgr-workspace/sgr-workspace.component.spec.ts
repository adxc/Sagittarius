import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgrWorkspaceComponent } from './sgr-workspace.component';

describe('SgrWorkspaceComponent', () => {
  let component: SgrWorkspaceComponent;
  let fixture: ComponentFixture<SgrWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgrWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgrWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
