import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpcedataComponent } from './spcedata.component';

describe('SpcedataComponent', () => {
  let component: SpcedataComponent;
  let fixture: ComponentFixture<SpcedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpcedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpcedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
