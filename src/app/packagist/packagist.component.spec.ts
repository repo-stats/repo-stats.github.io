import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PackagistComponent } from './packagist.component';

describe('PackagistComponent', () => {
  let component: PackagistComponent;
  let fixture: ComponentFixture<PackagistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PackagistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
