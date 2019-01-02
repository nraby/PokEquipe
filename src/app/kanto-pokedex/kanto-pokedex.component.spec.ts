import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KantoPokedexComponent } from './kanto-pokedex.component';

describe('KantoPokedexComponent', () => {
  let component: KantoPokedexComponent;
  let fixture: ComponentFixture<KantoPokedexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KantoPokedexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KantoPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
