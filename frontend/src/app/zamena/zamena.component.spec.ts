import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZamenaComponent } from './zamena.component';

describe('ZamenaComponent', () => {
  let component: ZamenaComponent;
  let fixture: ComponentFixture<ZamenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZamenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZamenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
