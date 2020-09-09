import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacealldataComponent } from './spacealldata.component';

describe('SpacealldataComponent', () => {
  let component: SpacealldataComponent;
  let fixture: ComponentFixture<SpacealldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacealldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacealldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
