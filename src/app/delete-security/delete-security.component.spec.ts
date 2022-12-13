import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSecurityComponent } from './delete-security.component';

describe('DeleteSecurityComponent', () => {
  let component: DeleteSecurityComponent;
  let fixture: ComponentFixture<DeleteSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
