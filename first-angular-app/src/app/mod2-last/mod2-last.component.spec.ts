import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2LastComponent } from './mod2-last.component';

describe('Mod2LastComponent', () => {
  let component: Mod2LastComponent;
  let fixture: ComponentFixture<Mod2LastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mod2LastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mod2LastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
