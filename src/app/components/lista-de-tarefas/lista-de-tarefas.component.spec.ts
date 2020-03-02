import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeTarefasComponent } from './lista-de-tarefas.component';

describe('ListaDeTarefasComponent', () => {
  let component: ListaDeTarefasComponent;
  let fixture: ComponentFixture<ListaDeTarefasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeTarefasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
