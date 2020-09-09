import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceAppComponent } from './space-app.component';

describe('SpaceAppComponent', () => {
  let component: SpaceAppComponent;
  let fixture: ComponentFixture<SpaceAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
