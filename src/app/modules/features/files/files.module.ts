import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilesListComponent } from './components/files-list/files-list.component';
import { AddFilesComponent } from './components/add-files/add-files.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbTabsetModule,
  NbTooltipModule,
} from '@nebular/theme';
import { FilePreviewComponent } from './components/file-preview/file-preview.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbTabsetModule,
    SharedModule,
    NbTooltipModule,
    TranslateModule,
  ],
  declarations: [
    FilesListComponent,
    AddFilesComponent,
    FilePreviewComponent,
  ],
  exports: [
    FilesListComponent,
    AddFilesComponent,
    FilePreviewComponent,
  ],
})
export class FilesModule { }