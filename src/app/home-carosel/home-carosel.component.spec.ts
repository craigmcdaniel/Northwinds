import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCaroselComponent } from './home-carosel.component';

describe('HomeCaroselComponent', () => {
  let component: HomeCaroselComponent;
  let fixture: ComponentFixture<HomeCaroselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCaroselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
