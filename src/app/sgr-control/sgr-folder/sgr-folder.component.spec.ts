import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgrFolderComponent } from './sgr-folder.component';

describe('SgrFolderComponent', () => {
  let component: SgrFolderComponent;
  let fixture: ComponentFixture<SgrFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgrFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgrFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
