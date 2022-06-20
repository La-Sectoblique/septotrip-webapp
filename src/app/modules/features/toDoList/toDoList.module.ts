import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './components/toDoList/toDoList.component';
import {
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    FormsModule,
    NbSelectModule,
    TranslateModule,
  ],
  declarations: [ToDoListComponent],
  exports: [ToDoListComponent],
})
export class ToDoListModule { }
