import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './components/toDoList/toDoList.component';
import { NbButtonModule, NbIconModule, NbInputModule, NbRadioModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    FormsModule,
  ],
  declarations: [ToDoListComponent],
  exports: [ToDoListComponent],
})
export class ToDoListModule { }
