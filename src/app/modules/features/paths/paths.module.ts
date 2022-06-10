import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathPreviewComponent } from './components/path-preview/path-preview.component';
import { NbButtonModule, NbInputModule, NbTooltipModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PathEditComponent } from './components/path-edit/path-edit.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    NbTooltipModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    TranslateModule,
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
