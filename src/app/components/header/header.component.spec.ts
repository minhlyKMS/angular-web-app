import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HeaderComponent as CommonHeaderComponent,
  LoginComponent
 } from 'mlkms-common-ui';

import { HeaderComponent } from './header.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommonHeaderComponent,
        HeaderComponent,
        LoginComponent,
        UserProfileComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
