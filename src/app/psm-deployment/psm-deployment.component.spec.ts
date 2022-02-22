import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsmDeploymentComponent } from './psm-deployment.component';

describe('PsmDeploymentComponent', () => {
  let component: PsmDeploymentComponent;
  let fixture: ComponentFixture<PsmDeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsmDeploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsmDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
