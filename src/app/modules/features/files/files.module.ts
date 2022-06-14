import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilesListComponent } from './components/files-list/files-list.component';
import { AddFilesComponent } from './components/add-files/add-files.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FilesListComponent,
    AddFilesComponent,
  ],
  exports: [
    FilesListComponent,
    AddFilesComponent,
  ],
})
export class FilesModule { }
