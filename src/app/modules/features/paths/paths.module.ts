import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathPreviewComponent } from './components/path-preview/path-preview.component';
import { NbButtonModule, NbInputModule, NbTooltipModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PathEditComponent } from './components/path-edit/path-edit.component';
import { TranslateModule } from '@ngx-translate/core';
import { PathDetailsComponent } from './components/path-details/path-details.component';
import { FilesModule } from '../files/files.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NbTooltipModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    TranslateModule,
    FilesModule,
    SharedModule,
  ],
  declarations: [
    PathPreviewComponent,
    PathEditComponent,
    PathDetailsComponent,
  ],
  exports: [
    PathPreviewComponent,
  ],
})
export class PathsModule { }
