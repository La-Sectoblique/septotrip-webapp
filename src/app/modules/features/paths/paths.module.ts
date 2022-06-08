import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathPreviewComponent } from './components/path-preview/path-preview.component';
import { NbButtonModule, NbInputModule, NbTooltipModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PathEditComponent } from './components/path-edit/path-edit.component';

@NgModule({
  imports: [
    CommonModule,
    NbTooltipModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
  ],
  declarations: [
    PathPreviewComponent,
    PathEditComponent,
  ],
  exports: [
    PathPreviewComponent,
  ],
})
export class PathsModule { }
