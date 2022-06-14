import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './components/toDoList/toDoList.component';
import { NbButtonModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    FormsModule,
    NbSelectModule,
  ],
  declarations: [ToDoListComponent],
  exports: [ToDoListComponent],
})
export class ToDoListModule { }
