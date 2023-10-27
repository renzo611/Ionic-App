import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoContactoPage } from './nuevo-contacto.page';

describe('NuevoContactoPage', () => {
  let component: NuevoContactoPage;
  let fixture: ComponentFixture<NuevoContactoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
