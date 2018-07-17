import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgrWorkspaceFolderComponent } from './sgr-workspace-folder.component';

describe('SgrWorkspaceFolderComponent', () => {
  let component: SgrWorkspaceFolderComponent;
  let fixture: ComponentFixture<SgrWorkspaceFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgrWorkspaceFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgrWorkspaceFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
